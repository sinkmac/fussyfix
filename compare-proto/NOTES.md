# Standing Stones — Landing Direction (comparison prototype)

## Direction chosen
Blend of **direction 4 + 3**: the hero carries a **real celestial element** — a faint arc toward the alignment bearing — while the page itself is a **full-bleed night sky** with **large foreground monolith silhouettes** and slow-drifting (pure-CSS) stars.

## Why
- The subject is the night sky at a monument; a blank banded strip reads as a *crop*, not a sky. Full-bleed makes the whole page the sky.
- One concrete mechanical cue (the arc) ties the page to the site's real alignment logic without a fake live-data dependency (constraint: no live weather, palette from site logic).
- Monumentality comes from the foreground standing stones at scale, not from ornament.

## Real vs placeholder
- **Real:** full-bleed gradient sky, star field (CSS), standing-stone silhouettes, the bearing arc, typographic voice, page structure.
- **Placeholder / to wire:** palette is still per-site **site logic placeholder**; actual alignment geometry and copy-vanilla to be wired to each site's server data; serene.

## Constraints
- Kept: SVG/CSS-only (no imagery), palette from site logic, honest tone (no invented countdown data), no live-weather API.
- Bent: I faked **no** star positions (they are generic scatter) — flagged for your call.

## Compare with
Opus counterpart — same brief, same constraints, both to be compared visually.