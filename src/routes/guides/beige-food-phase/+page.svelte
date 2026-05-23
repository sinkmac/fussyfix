<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'The Beige Food Phase — Why It Happens and What Actually Helps';
  const description = 'Why toddlers often prefer beige foods, what helps, what adds pressure, and when to seek support.';
  const path = '/guides/beige-food-phase';
  const faqs = [
    { question: 'Is beige food always a problem?', answer: 'Not always. Look at growth, energy, hydration, distress and whether the range is narrowing.' },
    { question: 'How many exposures can a new food need?', answer: 'Many children need repeated low-pressure exposure over time before a food feels familiar enough to try.' }
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
    <h1>The Beige Food Phase — Why It Happens and What Actually Helps</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="article-body">
      <p>It can feel frightening when the plate gets paler. Toast. Pasta. Crackers. Chips. Yoghurt if the pot is right. You look at the colour of the week and wonder if you have done something wrong.</p>
      <h2>Why beige happens</h2>
      <p>Many toddlers become wary of new foods around 18 months and into the preschool years. Food neophobia means caution around unfamiliar foods. Developmentally, that caution makes sense: a newly mobile child who puts unknown things in their mouth needs some protective wiring. Unfortunately, that wiring often points at broccoli.</p>
      <h2>What tends to help</h2>
      <p>Repeated low-pressure exposure helps more than pressure. That may mean the food is on the table, then on a side plate, then touched, then smelled, then licked, then ignored for another fortnight. Eating together can help because children learn from ordinary repetition. Removing the meal as a battleground matters too. The nervous system does not explore well while everyone is holding their breath.</p>
      <h2>What usually does not help</h2>
      <ul>
        <li>Counting bites at every meal.</li>
        <li>Bargaining with pudding until the main course becomes a hostage situation.</li>
        <li>Big speeches about starving children.</li>
        <li>Surprise hidden foods that break trust when discovered.</li>
        <li>Turning one rejected dinner into a verdict on the whole child.</li>
      </ul>
      <h2>If beige lasts longer</h2>
      <p>Some children stay beige longer than others. That is not proof of bad parenting. A child eating fish fingers and pasta is not starving, failing or broken. It may still be worth acting if the range keeps shrinking, growth is affected, constipation or tiredness becomes obvious, or your child is distressed by food rather than merely cautious.</p>
      <h2>A calmer aim</h2>
      <p>The aim is not a rainbow plate by Friday. The aim is a child who feels safe enough around food for small steps to become possible.</p>
    </div>
    <h2>Questions parents ask</h2>
    {#each faqs as faq}
      <h3>{faq.question}</h3>
      <p>{faq.answer}</p>
    {/each}

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
        <li><a href={commonSources.nhsChildWeight.url}>{commonSources.nhsChildWeight.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/mealtime-survival-scripts">Mealtime survival scripts</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods</a>
      <a href="/guides/nutrients-fussy-eater-uk">Nutrients guide</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
