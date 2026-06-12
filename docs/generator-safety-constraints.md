# FussyFix generator safety constraints

Status: engineering draft for Sink sign-off. These constraints are implemented in `src/lib/generatorSafety.ts` and exercised by `npm run eval:generator`.

## Source-backed constraints

1. Whole nuts and popcorn for under-5s
   - Constraint: do not suggest whole nuts or popcorn for the 1–2 or 3–5 age bands.
   - Source: NHS Best Start in Life, “Preparing food safely for babies”.
   - Source wording captured 12 June 2026: “Do not give whole nuts or popcorn to children under 5 years old.”
   - URL: https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/

2. Small round fruits for young children
   - Constraint: do not suggest whole grapes, whole cherries, whole berries, whole strawberries or whole cherry tomatoes for the 1–2 or 3–5 age bands. If such foods are mentioned, they must be quartered/prepared safely and must already be part of the entered safe-food zone.
   - Source: NHS Best Start in Life, “Preparing food safely for babies”.
   - Source wording captured 12 June 2026: “Cut small round fruits like grapes, cherries, berries, strawberries and cherry tomatoes into quarters (4 small pieces).”
   - URL: https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/

3. Firm fruit and hard pieces for the youngest band
   - Constraint: for 1–2 years, do not suggest hard chunks of apple/carrot or fruit with pips/stones. Firm fruits should be sliced, grated, mashed, steamed or simmered if they appear at all.
   - Source: NHS Best Start in Life, “Preparing food safely for babies”.
   - Source wording captured 12 June 2026: “Always remove hard pips or stones from fruit” and “For very young children – try grating, mashing, steaming or simmering firm fruits.”
   - URL: https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/

4. Sausages and hot dogs for young children
   - Constraint: do not suggest whole sausages, whole hot dogs, sausage rounds or hot-dog rounds for 1–2 or 3–5. If entered as safe foods, wording must keep preparation safe: short strips, lengthways halves, thinly cut, skin removed where relevant.
   - Source: NHS Best Start in Life, “Preparing food safely for babies”.
   - Source wording captured 12 June 2026: “Cut sausages and hot dogs into short strips. Cut them in half and then lengthways, or as thinly as possible. Peeling the skin off the sausages makes them easier to swallow.”
   - URL: https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/

5. Honey
   - Constraint: do not introduce honey for the 1–2 age band. This age band includes children over 1, but because the UI does not distinguish exact months, the generator does not introduce honey casually.
   - Source: NHS, “Foods to avoid giving babies and young children”.
   - Source wording captured 12 June 2026: “Do not give your child honey until they're over 1 year old.”
   - URL: https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/

## Non-source behavioural constraints

These are product-law constraints from the approved FussyFix philosophy rather than clinical claims:

- Ideas must be built from entered safe foods.
- Novel ingredients must not be required. If a variation appears, it must be clearly optional and no-pressure.
- Common allergens must not be introduced casually. If an entered safe food is itself an allergen, that remains parent-provided information and should not be expanded into other allergens.
- Output must not promise weight gain, growth, anxiety reduction, treatment, cure, or “fixing” eating.
- Acute concern language in the input must route away from generation to fixed GP/NHS 111/BEAT signposting.
- If screening errors, it must fail closed to the fixed signpost response.

## Sink sign-off record

- Final approval of the exact constraint list and whether the 1–2 honey rule should remain conservative. Approved by Sink on 12 June 2026: keep the current sourced constraint list and conservative 1–2 honey handling.
- Small-list threshold for the side-note behaviour. Approved by Sink on 12 June 2026: show the side-note for 1 or 2 safe foods; suppress it for 3+ safe foods.
- Final copy approval for the fixed urgent signpost and the small-list side-note. Approved by Sink on 12 June 2026 with the implemented wording in `src/lib/generatorSafety.ts`.
