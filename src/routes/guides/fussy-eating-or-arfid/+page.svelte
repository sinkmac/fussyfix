<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = "Is This Fussy Eating or ARFID? A Parent's Honest Guide";
  const description = 'A careful parent guide to the difference between developmental fussy eating and ARFID, with signs to watch and when to speak to a GP.';
  const path = '/guides/fussy-eating-or-arfid';
  const faqs = [
    { question: 'Can this page tell me if my child has ARFID?', answer: 'No. It can help you prepare for a GP conversation, but it cannot diagnose your child.' },
    { question: 'What should I track before speaking to the GP?', answer: 'Accepted foods, refused foods, weight or growth concerns, hydration, distress, social impact, and how long the pattern has been going on.' }
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
    <h1>Is This Fussy Eating or ARFID? A Parent's Honest Guide</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>You are awake because the question has stopped feeling small. Maybe your child ate six foods last month and four this week. Maybe everyone else says they will grow out of it, and you are no longer sure.</p>
      <h2>What developmental fussy eating can look like</h2>
      <p>Many children become more cautious with food in toddlerhood and the early preschool years. They may reject new foods, prefer familiar brands, eat more some days than others, and need repeated calm exposure before a food feels safe enough to taste. There is usually some movement over time: a lick, a smell, a tiny bite, a food accepted at nursery before home, or a new food added after weeks of seeing it.</p>
      <p>A child in this pattern may still have enough foods across the week to cover the basics. They may be willing to sit at the table, tolerate new food nearby, or recover from a refused meal without panic. It can still be exhausting. Normal does not mean easy.</p>
      <h2>What ARFID can look like in real life</h2>
      <p>Avoidant/restrictive food intake disorder, usually shortened to ARFID, is not a child being difficult. It is a serious eating difficulty where restriction can affect health, growth, daily life or emotional wellbeing. The presentation can look different from child to child.</p>
      <ul>
        <li><strong>Sensory sensitivity:</strong> certain textures, smells, colours or temperatures trigger real distress. A mixed yoghurt, a sauce touching pasta, or a warm food served cooler than expected may feel impossible.</li>
        <li><strong>Low interest in eating:</strong> the child is not refusing for leverage. Food may not feel interesting or rewarding. Meals can drag on because eating itself feels like work.</li>
        <li><strong>Fear of consequences:</strong> after choking, vomiting, an allergic reaction, reflux, pain or a frightening moment, the child may avoid foods because eating feels unsafe.</li>
        <li><strong>Mixed presentations:</strong> many children do not fit one neat box. Sensory fear, low appetite and anxiety can overlap.</li>
      </ul>
      <h2>The grey area</h2>
      <p>The line between severe fussy eating and ARFID can be blurry from the outside. A parent may not know whether they are seeing a difficult developmental phase, a sensory feeding difficulty, anxiety, ARFID, or another health issue affecting appetite. That uncertainty is exactly why you deserve support, not a shrug.</p>
      <h2>Three paths from here</h2>
      <p><strong>Wait and watch</strong> may be reasonable when your child is growing, hydrated, energetic, able to eat a workable range, and slowly adding or tolerating foods over time. Keep notes. Watch the number of accepted foods, stress levels, growth, energy, and whether meals are shrinking the family’s life.</p>
      <p><strong>See the GP</strong> if the safe list is getting smaller, meals cause intense distress, your child avoids social eating, school or nursery is affected, growth worries you, or your gut says this has moved beyond ordinary fussy eating. You can say: “My child eats a very restricted range of foods. I’m worried about ARFID or another feeding difficulty. Can we check growth and nutrition, and discuss referral to a paediatric dietitian or feeding service?”</p>
      <p><strong>Seek help this week</strong> if there is weight loss, dehydration, faintness, persistent vomiting, signs of malnutrition, severe distress around food, or marked social withdrawal because of eating. If symptoms are acute, use NHS 111 or urgent care.</p>
      <h2>Where to go next</h2>
      <p>ARFID Awareness UK and BEAT both explain ARFID in parent-friendly language. NICE guidance covers recognition and treatment of eating disorders, including the need to take concerns seriously. NHS routes usually begin with your GP, who can check growth, screen for physical causes and refer onward where appropriate.</p>
    </div>
    <h2>Questions parents ask</h2>
    {#each faqs as faq}
      <h3>{faq.question}</h3>
      <p>{faq.answer}</p>
    {/each}

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.niceEatingDisorders.url}>{commonSources.niceEatingDisorders.label}</a></li>
        <li><a href={commonSources.arfidAwareness.url}>{commonSources.arfidAwareness.label}</a></li>
        <li><a href={commonSources.beatArfid.url}>{commonSources.beatArfid.label}</a></li>
        <li><a href={commonSources.beatHelplines.url}>{commonSources.beatHelplines.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/safe-foods-fussy-eaters">Safe foods — how to use them well</a>
      <a href="/guides/fussy-eating-family-stress">When fussy eating becomes a family problem</a>
      <a href="/medical-disclaimer">Medical disclaimer</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
