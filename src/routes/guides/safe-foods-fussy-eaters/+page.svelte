<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Safe Foods — How to Use Them Well';
  const description = 'How safe foods work for fussy eaters and ARFID, and how food chaining can build from what a child already accepts.';
  const path = '/guides/safe-foods-fussy-eaters';
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
    <h1>Safe Foods — How to Use Them Well</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Safe foods are the foods your child can reliably eat when everything else feels too much. They may be brand-specific, shape-specific, temperature-specific, or only safe on a particular plate. That detail matters.</p>
      <h2>Safe foods are a foundation</h2>
      <p>A safe food is not a problem to be solved. It is the ground under the child’s feet. If you remove the ground, you do not create bravery. You create panic, hunger or both.</p>
      <h2>Food chaining</h2>
      <p>Food chaining means moving from a safe food to a nearby food that shares something important: colour, crunch, smell, temperature, shape, packet, brand, or the way it breaks in the mouth. From one exact cracker to a similar cracker. From plain pasta to the same pasta with butter nearby. From one yoghurt tube to the same flavour in a bowl.</p>
      <h2>The timeline</h2>
      <p>Think in weeks per food, not days. Sometimes the win is the new food in the room. Sometimes it is touching the wrapper. Sometimes it is a lick followed by refusal. Tiny wins count because they change what the child’s body learns about food.</p>
      <h2>Using the Safe Food Library</h2>
      <p>Start by writing every food that reliably works. Be specific. “Toast” may mean one brand, one colour, one level of crispness. Then look for near neighbours. FussyFix helps you start from what is already safe rather than beginning with the food everyone wishes was safe.</p>
      <h2>Fussy eating and ARFID</h2>
      <p>Food chaining for everyday fussy eating can be a gentle home strategy. For ARFID, or suspected ARFID, it should sit alongside professional guidance. The goal is not to push through distress. The goal is to make support safer and more structured.</p>
    </div>
    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.arfidAwareness.url}>{commonSources.arfidAwareness.label}</a></li>
        <li><a href={commonSources.beatArfid.url}>{commonSources.beatArfid.label}</a></li>
        <li><a href={commonSources.niceEatingDisorders.url}>{commonSources.niceEatingDisorders.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/fussy-eating-or-arfid">Fussy eating or ARFID</a>
      <a href="/guides/beige-food-phase">The beige food phase</a>
      <a href="/medical-disclaimer">Medical disclaimer</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
