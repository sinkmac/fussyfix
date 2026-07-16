<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Mealtime Survival — Scripts for Hard Moments';
  const description = 'Warm practical scripts for common fussy eating moments: refusal, gagging, relatives, restaurants and school lunches.';
  const path = '/guides/mealtime-survival-scripts';
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
    <h1>Mealtime Survival — Scripts for Hard Moments</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 23 May 2026</span>
      <span>Last updated: 23 May 2026</span>
    </div>
    <div class="article-body">
      <p>When a meal is already going wrong, theory is too heavy. You need a sentence you can borrow.</p>
      <h2>When your child refuses what is served</h2>
      <p><strong>Say:</strong> “That’s okay. You don’t have to eat it. Your safe food is there too.”</p>
      <p><strong>Do not say:</strong> “You liked this last week, stop making a fuss.” Last week may as well be another planet.</p>
      <h2>When your child gags or vomits</h2>
      <p><strong>Say:</strong> “Your body had a big reaction. Let’s clean up and pause.”</p>
      <p><strong>Do not say:</strong> “See, that wasn’t that bad.” It was bad for them. Start there.</p>
      <h2>When they say the food is disgusting</h2>
      <p><strong>Say:</strong> “It tastes wrong to you today. You can leave it.”</p>
      <p><strong>Do not say:</strong> “That’s rude.” You can teach manners later. In the moment, lower the temperature.</p>
      <h2>When relatives comment</h2>
      <p><strong>Adult to adult:</strong> “We’re keeping meals low-pressure. Please don’t comment on what they eat.”</p>
      <p><strong>If pushed:</strong> “I know you mean well. This is the approach we’re using.”</p>
      <h2>At restaurants</h2>
      <p><strong>Say before you go in:</strong> “We’re here to be together. You can eat the food that feels okay.”</p>
      <p><strong>Practical line to staff:</strong> “Could we have the sauce on the side, please?” No long explanation required.</p>
      <h2>The school lunchbox negotiation</h2>
      <p><strong>Say:</strong> “Lunch needs one food you can manage and one small practice food. You do not have to eat the practice food.”</p>
      <p><strong>Do not say:</strong> “I’m not packing the same thing again.” Repetition may be what gets them through the school day.</p>
      <h2>A 3-year-old scared of a new food</h2>
      <p><strong>Say:</strong> “It can stay on the plate. You can look with your eyes. No eating job today.”</p>
      <p>That is not giving in. That is teaching the table to feel safe again.</p>
    </div>
    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
        <li><a href={commonSources.beatArfid.url}>{commonSources.beatArfid.label}</a></li>
      </ul>
    </section>
    <section class="related-links" aria-label="Related pages">
      <a href="/guides/beige-food-phase">The beige food phase</a>
      <a href="/guides/fussy-eating-family-stress">Family stress</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods</a>
      <a class="primary-button" href="/">{toolCta}</a>
    </section>
  </article>
</section>
