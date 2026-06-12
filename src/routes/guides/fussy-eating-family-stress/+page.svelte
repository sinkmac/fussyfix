<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'When Fussy Eating Becomes a Family Problem';
  const description = 'A warm guide to the emotional and family stress around fussy eating, with support routes for parents.';
  const path = '/guides/fussy-eating-family-stress';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" href={meta.canonical} />
  <meta property="og:title" content={meta.ogTitle} />
  <meta property="og:description" content={meta.ogDescription} />
  <meta property="og:url" content={meta.ogUrl} />
  <meta property="og:type" content="article" />
</svelte:head>
<SchemaScript {schema} />

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>When Fussy Eating Becomes a Family Problem</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>There is a particular shame in packing the same lunch again while another parent talks about sushi. There is the dread before a birthday party. The argument in the kitchen. The quiet calculation of whether a family meal is worth the fallout.</p>
      <h2>The social cost</h2>
      <p>Fussy eating can shrink family life. Restaurants become risky. Grandparents comment. Nursery pick-up includes untouched lunchboxes. You may feel judged by people who see one meal and think they understand the whole story.</p>
      <h2>The arguments</h2>
      <p>Parents often turn on each other because the stress needs somewhere to go. One parent worries the child is being pushed too hard. The other worries nothing will ever change. Both may be scared. Both may be tired.</p>
      <h2>The dread before meals</h2>
      <p>When every meal feels like a small exam, the day changes shape around it. Shopping, cooking, serving, clearing, worrying. Repeat. Over months, that wears people down.</p>
      <h2>Support for you matters</h2>
      <p>If eating has become a family stressor, you can ask for help for yourself too. BEAT has helplines. ARFID Awareness UK has information for families. You can speak to your GP about your own stress, sleep, anxiety or low mood. Supporting the parent is part of supporting the child.</p>
      <p>You are not a bad parent. This is genuinely hard.</p>
    </div>
    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.beatHelplines.url}>{commonSources.beatHelplines.label}</a></li>
        <li><a href={commonSources.arfidAwareness.url}>{commonSources.arfidAwareness.label}</a></li>
        <li><a href={commonSources.niceEatingDisorders.url}>{commonSources.niceEatingDisorders.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/fussy-eating-or-arfid">Fussy eating or ARFID</a>
      <a href="/guides/mealtime-survival-scripts">Mealtime survival scripts</a>
      <a href="/medical-disclaimer">Medical disclaimer</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
