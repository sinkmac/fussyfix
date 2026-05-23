<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Recipes That Work for Fussy Eaters — Realistic UK Family Meals';
  const description = 'Realistic UK family meal ideas for fussy eaters: pasta, nuggets, beige plates, breakfast and sensory notes.';
  const path = '/guides/recipes-fussy-eaters-uk';
  const schema = articleSchema({ title, description, path });
</script>

<svelte:head>
  <title>{title} | FussyFix</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`https://fussyfix.co.uk${path}`} />
</svelte:head>
<SchemaScript {schema} />

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>Recipes That Work for Fussy Eaters — Realistic UK Family Meals</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="article-body">
      <p>These are not miracle recipes. They are realistic meals for tired UK kitchens where one safe food can carry the plate.</p>
      <h2>Smooth pasta sauce</h2>
      <p>Cook supermarket passata with a little grated carrot, red pepper, olive oil and mild cheddar, then blend completely smooth. Serve with the exact pasta shape your child accepts. Works best for children who accept tomato colour and smooth sauces. Not right for children who panic at sauce touching pasta.</p>
      <h2>Homemade chicken nuggets</h2>
      <p>Use chicken breast or thigh strips, flour, egg and fine breadcrumbs or crushed cornflakes. Bake or air-fry until crisp. Homemade versions can be easier for some sensory-sensitive children because you control size, coating and colour. Keep one familiar shop-bought version available if the homemade one is not accepted.</p>
      <h2>Beige plate with one nutrient-dense item</h2>
      <p>Toast soldiers, cheese cubes, yoghurt, banana slices, fortified cereal, scrambled egg, hummus with plain breadsticks, or fish fingers with peas nearby. A beige plate can still carry protein, calcium or iron. The win may be nutrition, not colour.</p>
      <h2>Breakfast when breakfast is hard</h2>
      <p>Try drinkable yoghurt, fortified cereal dry in a pot, toast with butter, banana, malt loaf, cheese on toast, or a small smoothie if smooth drinks are accepted. Some children need the first food to be tiny before appetite wakes up.</p>
      <h2>Which child this suits</h2>
      <ul>
        <li>Sensory-sensitive children may need predictable shapes, separate foods and no mixed textures.</li>
        <li>Children with low appetite may do better with small frequent foods rather than a large plate.</li>
        <li>Children with fear after choking or vomiting may need professional support before recipe changes help.</li>
        <li>Children in an ordinary beige phase may tolerate one tiny side change beside a safe main food.</li>
      </ul>
      <h2>UK supermarket realism</h2>
      <p>Use the brands, packets and formats your child already trusts. If own-brand hoops work, use them. If one nugget brand is safe, keep it. Food work starts with what actually gets eaten.</p>
    </div>
    <div class="affiliate-note"><strong>Affiliate note:</strong> This is one of the only FussyFix pages where shopping links may appear in future. Any such links will be clearly marked and will not change the editorial advice.</div>

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsEatwell.url}>{commonSources.nhsEatwell.label}</a></li>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/nutrients-fussy-eater-uk">Nutrients guide</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods</a>
      <a href="/guides/beige-food-phase">The beige food phase</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
