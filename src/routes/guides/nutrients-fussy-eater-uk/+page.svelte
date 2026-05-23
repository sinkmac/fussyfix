<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Getting Nutrients Into a Fussy Eater — UK Practical Guide';
  const description = 'UK practical nutrition ideas for fussy eaters: iron, protein, vegetables, calcium and when to ask for dietitian support.';
  const path = '/guides/nutrients-fussy-eater-uk';
  const faqs = [
    { question: 'Is this medical nutrition advice?', answer: 'No. It is general information and harm reduction. Ask your GP for referral to a paediatric dietitian if you are worried.' },
    { question: 'Should I use supplements?', answer: 'Ask a pharmacist, GP or dietitian, especially for young children or children with restricted eating.' }
  ];
  const schema = [articleSchema({ title, description, path }), faqSchema(faqs)];
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
    <h1>Getting Nutrients Into a Fussy Eater — UK Practical Guide</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="article-body">
      <p>This is harm reduction, not optimal nutrition. If you are worried about growth, energy, constipation, fatigue, weight loss, or a very restricted food range, ask your GP about referral to a paediatric dietitian.</p>
      <h2>Iron</h2>
      <p>Iron can be hard when meat is refused. Fortified breakfast cereals can help: Weetabix, Ready Brek, Shreddies and many supermarket own-brand wheat biscuits or hoops are fortified. Check the label because recipes change. Beans in tomato sauce, lentil pasta accepted as “pasta”, Marmite on toast, eggs and some red meat alternatives may also help when they fit the safe list.</p>
      <h2>Protein</h2>
      <p>Protein does not have to mean a roast dinner. Milk, yoghurt, cheese, eggs, baked beans, hummus, peanut butter where safe, chicken nuggets, fish fingers, lentil pasta and yoghurt pouches can all contribute. Some UK children’s products are useful because texture and packaging are predictable.</p>
      <h2>Vegetables</h2>
      <p>Hidden vegetables can work when the texture is genuinely smooth and the child is already comfortable with the sauce. A mild tomato sauce blended completely smooth with carrot or red pepper may be accepted by some pasta-eaters. It will not work for every child. If discovery would break trust, do not make secrecy the strategy.</p>
      <h2>Calcium</h2>
      <p>If milk is refused, look at yoghurt, cheese, fortified soya or oat drinks, fortified cereals, custard, rice pudding, and calcium-set tofu if it fits the child’s accepted textures. For dairy alternatives, choose unsweetened fortified versions where possible, but accepted beats perfect when the range is very small.</p>
      <h2>Managing expectations</h2>
      <p>A week with fortified cereal, yoghurt, toast, pasta and fruit may look odd. It may also be keeping a child going. Clinical support can help you build from there without turning every meal into a test.</p>
    </div>
    <h2>Questions parents ask</h2>
    {#each faqs as faq}
      <h3>{faq.question}</h3>
      <p>{faq.answer}</p>
    {/each}

    <div class="affiliate-note"><strong>Affiliate note:</strong> This is one of the only FussyFix pages where shopping links may appear in future. Any such links will be clearly marked and will not change the editorial advice.</div>

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsEatwell.url}>{commonSources.nhsEatwell.label}</a></li>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
        <li><a href={commonSources.sacn.url}>{commonSources.sacn.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/recipes-fussy-eaters-uk">Realistic recipes</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods</a>
      <a href="/medical-disclaimer">Medical disclaimer</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
