import seasonality from '$lib/data/seasonality.json';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export interface ChartEntry {
  position: number;
  vegetableId: string;
  lastWeek: number | null;
  weeksOnChart: number;
  peak: number;
  badge: 'new' | 're-entry' | 'climber' | 'non-mover' | null;
}

export interface ChartWeek {
  week: string;
  published: string;
  entries: ChartEntry[];
}

function getCurrentWeekKey(): string {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  const weekNum = Math.ceil((dayOfYear + startOfYear.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

function getCurrentMonth(): number {
  return new Date().getMonth() + 1; // 1-indexed
}

function scoreVegetable(veg: typeof seasonality[0], month: number): number {
  if (veg.type === 'import_year_round') {
    let baseline = 8.0;
    if (veg.uk_start && veg.uk_end) {
      const end = veg.uk_end;
      const start = veg.uk_start;
      if (end >= start) {
        if (start <= month && month <= end) return baseline + 3.0;
      } else {
        if (month >= start || month <= end) return baseline + 3.0;
      }
    }
    return baseline;
  }

  if (veg.type === 'year_round') {
    let baseline = 7.0;
    if (veg.uk_start && veg.uk_end) {
      const end = veg.uk_end;
      const start = veg.uk_start;
      if (end >= start) {
        if (start <= month && month <= end) return baseline + 3.0;
      } else {
        if (month >= start || month <= end) return baseline + 3.0;
      }
    }
    return baseline;
  }

  // Seasonal
  const start = veg.uk_start;
  const end = veg.uk_end;
  if (start === null || end === null) return 5.0;

  if (end >= start) {
    if (start <= month && month <= end) {
      const seasonPos = (month - start) / (end - start);
      return 15.0 - Math.abs(seasonPos - 0.5) * 12.0;
    } else {
      const monthsUntil = month < start ? start - month : (12 - month) + start;
      return Math.max(1.0, 4.0 - monthsUntil * 0.8);
    }
  } else {
    if (month >= start || month <= end) {
      const seasonPos = month >= start
        ? (month - start) / ((12 - start) + end)
        : (month + 12 - start) / ((12 - start) + end);
      return 15.0 - Math.abs(seasonPos - 0.5) * 12.0;
    } else {
      const monthsUntil = month < start ? start - month : (12 - month) + start;
      return Math.max(1.0, 4.0 - monthsUntil * 0.8);
    }
  }
}

export function computeChart(previousWeek: ChartWeek | null): ChartWeek {
  const month = getCurrentMonth();
  const weekKey = getCurrentWeekKey();

  // Score all vegetables
  const scored = seasonality.map((veg) => ({
    id: veg.id,
    score: scoreVegetable(veg, month)
  }));

  // Sort by score descending, then alphabetically for ties
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.id.localeCompare(b.id);
  });

  // Build entries
  const entries: ChartEntry[] = scored.map((s, i) => {
    const position = i + 1;
    const prevEntry = previousWeek?.entries.find((e) => e.vegetableId === s.id);
    const lastWeek = prevEntry?.position ?? null;
    const weeksOnChart = prevEntry ? prevEntry.weeksOnChart + 1 : 1;
    const peak = prevEntry ? Math.min(prevEntry.peak, position) : position;

    let badge: ChartEntry['badge'] = null;
    if (!prevEntry) {
      badge = 'new';
    } else if (prevEntry && lastWeek !== null && lastWeek - position >= 3) {
      badge = 'climber';
    } else if (lastWeek !== null && lastWeek === position) {
      badge = 'non-mover';
    }

    return { position, vegetableId: s.id, lastWeek, weeksOnChart, peak, badge };
  });

  return {
    week: weekKey,
    published: new Date().toISOString().split('T')[0],
    entries
  };
}

export { seasonality, getCurrentWeekKey, getCurrentMonth };