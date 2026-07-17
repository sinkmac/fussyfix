#!/usr/bin/env python3
"""Generate chart-weeks.json from seasonality data.

Deterministic: same inputs (date + seasonality.json) always produce the same chart.
Usage: python3 scripts/generate-chart.py [--week YYYY-Www] [--append]
"""
import json
import sys
import os
from datetime import date, datetime, timedelta
from argparse import ArgumentParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def load_json(path):
    with open(path) as f:
        return json.load(f)

def iso_week_to_date(week_str):
    """Convert ISO week string like '2026-W28' to the Monday of that week."""
    from datetime import date
    year_s, week_s = week_str.split('-W')
    year = int(year_s)
    week = int(week_s)
    # Jan 4 of the ISO year is always in week 1
    jan4 = date(year, 1, 4)
    days_to_jan4 = (jan4 - date(year, 1, 1)).days
    # Monday of week 1
    week1_monday = date(year, 1, 1) + timedelta(days=(-jan4.weekday() if jan4.weekday() <= 3 else 7 - jan4.weekday()))
    return week1_monday + timedelta(weeks=week - 1)

def date_to_iso_week(d):
    """Return (year, week_number) for a given date."""
    return d.isocalendar()[:2]

def current_iso_week():
    """Return the current ISO week string like '2026-W28'."""
    d = date.today()
    year, week = d.isocalendar()[:2]
    return f"{year}-W{week:02d}"

def month_from_week(week_str):
    """Get the month (1-12) from an ISO week string."""
    monday = iso_week_to_date(week_str)
    return monday.month

def normalize_month(m):
    """Normalize month to 1-12, handling wrap-around."""
    while m < 1:
        m += 12
    while m > 12:
        m -= 12
    return m

def months_between(m1, m2):
    """Months from m1 to m2 going forward (never backward). Always positive."""
    if m1 <= m2:
        return m2 - m1
    else:
        return (12 - m1) + m2

def months_until_season_start(current_month, start_month):
    """Months until the next season start. Always positive (never 0 for 'at start' - 
    returns 0 if at start or in season)."""
    if current_month == start_month:
        return 0
    diff = months_between(current_month, start_month)
    return diff

def is_in_season(current_month, start_month, end_month):
    """Check if current_month is within the season window [start_month, end_month].
    Handles wrap-around (e.g., start=9, end=3 means Sep-Mar)."""
    if start_month <= end_month:
        return start_month <= current_month <= end_month
    else:
        # Season wraps around year-end (e.g., Sep-Mar)
        return current_month >= start_month or current_month <= end_month


def season_length(start_month, end_month):
    """Length of season in months. Handles wrap-around."""
    if start_month <= end_month:
        return end_month - start_month + 1
    else:
        return (12 - start_month) + end_month + 1


def compute_score(veg, current_month, glasshouse_months):
    """Compute a seasonality score for a vegetable given the current month.
    
    Returns a float score. Higher = better season position.
    Seasonal: 0.0 to 1.0 (in season), negative when out of season (proximity to next start).
    Year-round: 0.5
    Import year-round: 0.4 (with glasshouse boost)
    """
    vtype = veg.get("type", "seasonal")
    
    if vtype == "year_round":
        return 0.5
    
    if vtype == "import_year_round":
        base = 0.4
        # Check if current month is in UK glasshouse window
        if glasshouse_months and current_month in glasshouse_months:
            base += 0.05
        return base
    
    # Seasonal vegetable
    start = veg["uk_start"]
    end = veg["uk_end"]
    peak_start = veg.get("uk_peak_start", start)
    peak_end = veg.get("uk_peak_end", end)
    
    if not is_in_season(current_month, start, end):
        # Out of season - score by proximity to next season start
        months_until = months_until_season_start(current_month, start)
        if months_until == 0:
            # At the start month but not in season? This shouldn't happen
            # unless start == current_month and the season check is wrong
            return 0.0
        # Negative score: closer to 0 means closer to next season
        return -(months_until / 12.0)
    
    # In season
    if peak_start <= peak_end:
        # Peak doesn't wrap
        if peak_start <= current_month <= peak_end:
            return 1.0  # At peak
    else:
        # Peak wraps (e.g., Nov-Jan)
        if current_month >= peak_start or current_month <= peak_end:
            return 1.0  # At peak
    
    # Not at peak yet - ramp up from start to peak_start
    if start <= peak_start:
        # Normal direction
        if current_month < peak_start:
            progress = (current_month - start) / (peak_start - start) if peak_start > start else 1.0
            return max(0.0, progress)
        # Past peak - ramp down from peak_end to end
        if current_month > peak_end:
            if peak_end < end:
                remaining = (end - current_month) / (end - peak_end) if end > peak_end else 0.0
                return max(0.0, remaining)
            return 0.0
    else:
        # Peak wraps relative to start... handle this edge case
        pass
    
    return 0.0


def generate_chart_week(week_str, prev_week=None):
    """Generate a chart week from seasonality data."""
    seasonality = load_json(os.path.join(ROOT, "src/lib/data/seasonality.json"))
    vegetables = load_json(os.path.join(ROOT, "src/lib/data/vegetables.json"))
    
    month = month_from_week(week_str)
    
    # Build lookup: id -> seasonality entry
    seas_lookup = {s["id"]: s for s in seasonality}
    
    # Build id -> name mapping
    veg_lookup = {v["id"]: v["name"] for v in vegetables["vegetables"]}
    
    # Glasshouse months for imports
    glasshouse_map = {
        "aubergine": [7, 8, 9, 10],  # Jul-Oct
        "bell-pepper": [7, 8, 9, 10],  # Jul-Oct
    }
    
    # Compute scores for all chart-eligible vegetables
    scored = []
    for veg in vegetables["vegetables"]:
        if not veg.get("chartEligible", True):
            continue
        vid = veg["id"]
        s = seas_lookup.get(vid)
        if not s:
            continue
        gh = glasshouse_map.get(vid)
        score = compute_score(s, month, gh)
        scored.append((score, vid))
    
    # Sort by score descending, then alphabetically as tiebreaker
    scored.sort(key=lambda x: (-x[0], x[1]))
    
    # Map to previous week positions if available
    prev_positions = {}
    if prev_week:
        for entry in prev_week["entries"]:
            prev_positions[entry["vegetableId"]] = entry["position"]
    
    # Build entries
    entries = []
    for i, (score, vid) in enumerate(scored):
        position = i + 1
        prev_pos = prev_positions.get(vid) if prev_week else None
        
        last_week = prev_pos
        if prev_week:
            weeks_on = prev_week["entries"][prev_pos - 1]["weeksOnChart"] + 1 if prev_pos else 1
            # Peak is the highest (best) position this veg has ever held
            prev_peak = prev_week["entries"][prev_pos - 1]["peak"] if prev_pos else position
            peak = min(prev_peak, position)  # lower number = better position
        else:
            weeks_on = 1
            peak = position
        
        # Badge
        if prev_week is None or prev_pos is None:
            badge = "new"
        elif prev_pos > position:
            badge = "climber"
        elif prev_pos < position:
            badge = None  # faller - no badge
        else:
            badge = None  # non-mover - handled by movement column
        
        entries.append({
            "position": position,
            "vegetableId": vid,
            "lastWeek": prev_pos,
            "weeksOnChart": weeks_on,
            "peak": peak,
            "badge": badge
        })
    
    # Published date: Monday of the week
    week_monday = iso_week_to_date(week_str)
    published = week_monday.strftime("%Y-%m-%d")
    
    return {
        "week": week_str,
        "published": published,
        "entries": entries
    }


def main():
    parser = ArgumentParser(description="Generate chart-weeks.json from seasonality data")
    parser.add_argument("--week", default=None, help="ISO week to generate (default: current week)")
    parser.add_argument("--append", action="store_true", help="Append to existing chart-weeks.json instead of overwriting")
    args = parser.parse_args()
    
    if args.week:
        week = args.week
    else:
        week = current_iso_week()
    
    chart_path = os.path.join(ROOT, "src/lib/data/chart-weeks.json")
    
    existing = []
    if args.append and os.path.exists(chart_path):
        existing = load_json(chart_path)
    
    prev_week = existing[-1] if existing else None
    
    # For W28 (first week) we need to generate without a previous week
    new_week = generate_chart_week(week, prev_week)
    
    # Check if this week already exists
    existing_weeks = {w["week"] for w in existing}
    if new_week["week"] in existing_weeks:
        # Replace existing entry
        existing = [w for w in existing if w["week"] != new_week["week"]]
    
    if args.append:
        existing.append(new_week)
        output = existing
    else:
        # Also generate W28 if it doesn't exist and we're regenerating
        if week != "2026-W28" and not any(w["week"] == "2026-W28" for w in existing):
            w28 = generate_chart_week("2026-W28", None)
            output = [w28, new_week]
        else:
            output = [new_week] if not args.append else existing
    
    # Sort by week
    output.sort(key=lambda w: w["week"])
    
    with open(chart_path, "w") as f:
        json.dump(output, f, indent=2)
        f.write("\n")
    
    print(f"Generated {len(output)} weeks: {[w['week'] for w in output]}")
    for w in output:
        print(f"  {w['week']} ({w['published']}):")
        for e in w["entries"][:5]:
            print(f"    #{e['position']} {e['vegetableId']} (score: {e.get('_score', '?')})")
        print(f"    ... {len(w['entries'])} entries total")


if __name__ == "__main__":
    main()