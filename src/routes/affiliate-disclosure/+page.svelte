<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Affiliate Disclosure',
    description: 'Affiliate disclosure for FussyFix, including which pages may carry affiliate links.',
    path: '/affiliate-disclosure'
  });
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" href={meta.canonical} />
  <meta property="og:title" content={meta.ogTitle} />
  <meta property="og:description" content={meta.ogDescription} />
  <meta property="og:url" content={meta.ogUrl} />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Affiliate disclosure</div>
    <h1>Affiliate links are separated from clinical and emotional pages</h1>
    <div class="article-body">
      <p>FussyFix may earn commission from some links in future. Affiliate links are allowed only on two pages: <a href="/guides/recipes-fussy-eaters-uk">Recipes That Work for Fussy Eaters</a> and <a href="/guides/nutrients-fussy-eater-uk">Getting Nutrients Into a Fussy Eater</a>.</p>
      <p>Affiliate links must never appear on the clinical guide, mealtime survival scripts, family stress guide, medical disclaimer, or any compliance page.</p>
      <p>Affiliate relationships do not affect editorial content, source selection, clinical warnings, medical disclaimers or the Safe Food Library output.</p>
      <p>If a link is sponsored or earns commission, it should be marked clearly. Buying through a link is optional.</p>
    </div>
  </article>
</section>
