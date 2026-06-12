# AdSense Blocking Controls

**Account:** ca-pub-2335335210412692  
**Scope:** All sites (account-wide)  
**Last updated:** 12 June 2026

---

## Sensitive Categories

### Standard categories — 9 blocked (4 remaining)

| Category | Status |
|---|---|
| Astrology & Esoteric | Allowed |
| Cosmetic Procedures & Body Modification | **Blocked** |
| Dating | **Blocked** |
| Downloadable Utilities | Allowed |
| Drugs & Supplements | **Blocked** |
| Get Rich Quick | **Blocked** |
| Politics | Allowed |
| References to Sex | **Blocked** |
| Religion | Allowed |
| Sensationalism | **Blocked** |
| Sexual & Reproductive Health | **Blocked** |
| Social Casino Games | **Blocked** |
| Weight Loss | **Blocked** |

### Restricted categories — 2 blocked (0 remaining)

| Category | Status |
|---|---|
| Alcohol | **Blocked** |
| Gambling & Betting (18+) | **Blocked** |

---

## Route-level ad suppression (code side)

Ads are disabled entirely on the following routes via `/src/lib/adConfig.ts`:

- `/guides/fussy-eating-or-arfid`
- `/medical-disclaimer`

---

## Rationale

FussyFix serves families with young children, including children with ARFID and other feeding difficulties. The blocked categories were selected to avoid:

- Body image and diet culture messaging (Weight Loss, Cosmetic Procedures, Drugs & Supplements)
- Age-inappropriate content (Dating, References to Sex, Sexual & Reproductive Health, Social Casino Games, Gambling & Betting)
- Predatory or misleading financial offers (Get Rich Quick)
- Alcohol advertising
- Sensationalist or tonally mismatched creative (Sensationalism)

---

## General Categories

Review pending. To be assessed via: Brand safety → Blocking controls → General categories.

---

## Change log

| Date | Change | Applied by |
|---|---|---|
| 12 June 2026 | Initial block list applied account-wide across 11 categories | Sink (manual, AdSense console) |
