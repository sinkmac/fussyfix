#!/usr/bin/env python3
"""Count rendered article-body words for FussyFix guide/redeem pages.

Usage:
  python3 scripts/count-article-words.py http://127.0.0.1:4399 | sort -rn
  python3 scripts/count-article-words.py https://fussyfix.co.uk | sort -rn

Fetches each URL, isolates the `.article-body` block (falling back to the
page shell), strips tags, and reports the word count. This is the canonical
verifier for the AdSense content-depth check — it counts body content only,
not the nav/footer app shell.
"""
import re
import sys
import html as html_mod
import urllib.request

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4399"

REDEEM = [
    "broccoli", "cauliflower", "carrot", "peas", "potato", "sweet-potato",
    "parsnip", "swede", "cabbage", "kale", "spinach", "runner-beans",
    "courgette", "aubergine", "beetroot", "bell-pepper", "broad-beans",
    "tomato", "cucumber", "leek", "brussels-sprouts",
]
GUIDES = [
    "beige-food-phase", "fussy-eating-family-stress", "fussy-eating-or-arfid",
    "mealtime-survival-scripts", "nutrients-fussy-eater-uk",
    "recipes-fussy-eaters-uk", "safe-foods-fussy-eaters", "school-fussy-eater-uk",
    "potato-redemption", "cauliflower-redemption", "carrot-redemption",
    "peas-redemption", "spinach-redemption",
]


def body_words(raw: str) -> int:
    # strip shell noise that isn't article body
    raw = re.sub(r"<script.*?</script>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<style.*?</style>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<head.*?</head>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<footer.*?</footer>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<header.*?</header>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<nav.*?</nav>", " ", raw, flags=re.S | re.I)
    m = re.search(r'<div class="article-body">(.*?)</div>', raw, flags=re.S | re.I)
    seg = m.group(1) if m else raw
    seg = re.sub(r"<[^>]+>", " ", seg)
    seg = html_mod.unescape(seg)
    return len([w for w in seg.split() if re.search(r"[A-Za-z0-9]", w)])


def fetch(path: str) -> tuple:
    url = f"{BASE}{path}"
    try:
        with urllib.request.urlopen(url, timeout=30) as r:
            return body_words(r.read().decode()), url
    except Exception as e:  # noqa: BLE001
        return None, f"{url} {e}"


for rid in REDEEM:
    n, u = fetch(f"/redeem/{rid}")
    print(f"{n if n is not None else 'ERR':>6}  /redeem/{rid}")
for g in GUIDES:
    n, u = fetch(f"/guides/{g}")
    print(f"{n if n is not None else 'ERR':>6}  /guides/{g}")