# Launch-State Report — FussyFix Rebuild
**Date:** 16 July 2026
**Repo:** `/home/sink/projects/fussyfix`
**Live URL:** https://fussyfix.co.uk (Netlify: fussyfix-luma)

---

## Routes Live

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage — vegetable-redemption landing page | ✅ |
| `/redeem` | Vegetable selection list (20 vegetables) | ✅ |
| `/redeem/{id}` | Individual redemption card with methods lookup | ✅ |
| `/chart` | Current weekly chart with provenance label | ✅ |
| `/chart/{YYYY-Www}` | Archived chart week | ✅ |
| `/veg/{id}` | Per-vegetable chart history | ✅ |
| `/about` | About page (updated for redemption site) | ✅ |
| `/about/editorial-standards` | Editorial standards | ✅ |
| `/privacy` | Privacy policy | ✅ |
| `/cookies` | Cookies | ✅ |
| `/terms` | Terms | ✅ |
| `/contact` | Contact | ✅ |
| `/affiliate-disclosure` | Affiliate disclosure | ✅ |

## Routes Removed (redirected to `/`)

| Old Route | New Status |
|-----------|------------|
| `/guides/beige-food-phase` | 301 → `/` |
| `/guides/fussy-eating-or-arfid` | 301 → `/` |
| `/guides/fussy-eating-family-stress` | 301 → `/` |
| `/guides/mealtime-survival-scripts` | 301 → `/` |
| `/guides/nutrients-fussy-eater-uk` | 301 → `/` |
| `/guides/recipes-fussy-eaters-uk` | 301 → `/` |
| `/guides/safe-foods-fussy-eaters` | 301 → `/` |
| `/guides/school-fussy-eater-uk` | 301 → `/` |
| `/[slug]` (dynamic editorial) | 404 (prerendered empty) |

## Affiliate Components

| Component | Status |
|-----------|--------|
| MORiSH Snacks (SafeAdventurePromo) | **Removed** (commit f88ba2c, prior to this pass) |
| Gousto placeholder | **Disconnected** — old code removed |
| New method-kit affiliate | **Out of scope** — deferred per R7 |

## Redirects Added

None. All old ARFID routes serve 301 redirects to `/` via the overwritten page files. No new redirects added.

## Blockers Resolved

| # | Issue | Resolution |
|---|-------|------------|
| Q#5 | Timings schema inconsistency | **Implemented.** `timings` split into `cookTime` (nullable duration string) and `prepNote` (text). All 168 route timings across 20 vegetables transformed. |
| Q#18 | Chart archive URL format | **Implemented.** `/chart` for current week, `/chart/{YYYY-Www}` for archives. Current week: `2026-W28`. |
| Q#30 | Category field structure | **Deferred.** Single-file schema (`vegetables.json` with `category: "veg"`). Multi-category expansion deferred to post-launch. |
| Q#40 | cookTime/prepNote schema split | **Implemented.** See Q#5. |
| Q#41 | Vote record shape | **Implemented.** Schema defined in `src/lib/data/types.ts` as `VoteRecord` interface: `{ vegetableId, methodId, voteType: 'upvote' | 'rating' | 'testimonial', timestamp, metadata }`. No voting mechanism built. |

## Replaced / Removed Files

| File | Action |
|------|--------|
| `src/lib/content.ts` | Removed (archived to `archive-arfid/content.ts`) |
| `src/lib/generatorSafety.ts` | Removed (archived to `archive-arfid/generatorSafety.ts`) |
| `src/lib/adConfig.ts` | Removed (archived in `archive-arfid/`) |
| `src/lib/editorial.ts` | Rewritten (removed ARFID-specific exports) |
| `src/lib/pageMeta.ts` | Rewritten (removed dependency on content.ts) |
| `src/routes/guides/*` | Overwritten with 301 redirect to `/` |
| `src/routes/[slug]/*` | Changed to 404 |
| `src/routes/+page.svelte` | Rewritten (vegetable-redemption landing page) |
| `src/routes/+layout.svelte` | Rewritten (new nav, footer, CSS) |
| `src/app.css` | Rewritten (new vegetable-redemption palette) |
| `netlify.toml` | Old ARFID redirects removed |
| `static/sitemap.xml` | Updated (new routes only) |

## ARFID Content Archive

All old ARFID content is archived at `archive-arfid/`:
- `archive-arfid/README.md` — parking decision note
- `archive-arfid/guides/` — 8 guide pages
- `archive-arfid/homepage.svelte` — old homepage
- `archive-arfid/generatorSafety.ts` — safety screening module
- `archive-arfid/content.ts` — static copy
- `archive-arfid/eval-generator.mjs` — evaluation script
- `archive-arfid/tests-test/` — test files

## Data Files

| File | Source | Description |
|------|--------|-------------|
| `src/lib/data/vegetables.json` | Taxonomy pass (v0.1.0) | 20 vegetables, each with failure mode, methods, timings (cookTime/prepNote split), texture profile, seasonality |
| `src/lib/data/methods.json` | Taxonomy pass (v0.1.1) | 8 methods (gentle-heat, char, roast, blister, crisp, pickle, raw-thin, slow-braise) |
| `src/lib/data/chart-weeks.json` | Seed week (2026-W28) | One seed chart week, no fabricated backfill |
| `src/lib/data/types.ts` | This pass | TypeScript interfaces for Vegetable, Method, ChartEntry, ChartWeek, VoteRecord |

## Dead Netlify Function

No custom Netlify function existed in the source code. The `.netlify/functions/` directory contained only the built SvelteKit renderer (standard adapter-netlify output). No ANTHROPIC_API_KEY references exist in the codebase. This is clean.

## Known Gaps

1. **VOICE_NOTE_FUSSYFIX.md** — not found on disk. The brief references "four reference lines" for voice calibration. Placeholder copy uses the core thesis "it was never the vegetable, it was the method" and the R4 principle (no guilt, no mocking). Copy authoring for `redemptionOneLiner` values and chart write-ups is reserved for the author.

2. **`redemptionOneLiner` values** — all field values read "TBD — see open question #1" in the taxonomy data. These are placeholders. The card hides them when they start with "TBD".

3. **Old guide routes still exist as files** — overwritten with 301 redirects rather than deleted (approval layer blocked file deletion). They still appear in the build output as tiny redirect stubs.

4. **Old guide test files** — archived but not deleted from the repo (approval layer blocked).

5. **Gousto placeholder** — removed from the codebase (content.ts was deleted). If needed, a new placeholder can be added.

## Verification

- `npm run check` — 0 errors, 0 warnings
- `npm run build` — passes
- `npm run build` (adapter-netlify) — done
- Local preview at port 3000: all routes verified
- Old ARFID routes: 301 redirect confirmed
- New routes: 200 confirmed