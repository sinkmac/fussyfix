<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables } from '$lib/data';

  const meta = pageMeta({
    title: 'Redeem a vegetable',
    description: 'Every vegetable has a redemption story. Find yours — lookup by name and discover the method that transforms it.',
    path: '/redeem'
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

<section class="page-shell">
  <div class="eyebrow">Redeem a vegetable</div>
  <h1>Choose a vegetable</h1>
  <p class="lede">
    Select one you thought you hated. Every card shows the childhood failure mode,
    the best redemption method, full timings for every route, and why it works now.
  </p>

  <div class="veg-grid" style="margin-top: 1.5rem;">
    {#each vegetables.vegetables as veg}
      <a href="/redeem/{veg.id}" class="veg-card">
        <h3>{veg.name}</h3>
        <p class="failure-preview">{veg.childhoodFailureMode}</p>
        <div style="margin-top: 0.5rem; display: flex; gap: 0.4rem; flex-wrap: wrap;">
          {#each veg.redemptionMethods as method}
            <span class="badge badge--non-mover" style="font-size: 0.7rem;">{method}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>