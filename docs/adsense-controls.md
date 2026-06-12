# AdSense category controls

Status: implementation hook added; AdSense console changes require account access and are not performed from this repo.

## Required AdSense blocks

Block these at minimum in AdSense sensitive/general category controls:

- Weight loss
- Dieting / diet products
- Supplements
- Pharmaceuticals
- Cosmetic procedures

Record the date/time and exact category labels used in AdSense after applying them.

## Route-level ad toggle

The repo now has a one-line route control in `src/lib/adConfig.ts`:

```ts
disabledRoutes: new Set(['/guides/fussy-eating-or-arfid', '/medical-disclaimer'])
```

Current engineering recommendation: ads off entirely on:

- `/guides/fussy-eating-or-arfid`
- `/medical-disclaimer`

Sink final decision required before production ad placement changes. If Sink decides ARFID ads stay on, remove `/guides/fussy-eating-or-arfid` from `disabledRoutes` in one config edit.
