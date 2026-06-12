<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  let { data } = $props();

  const meta = $derived(
    pageMeta({
      title: data.page.title,
      description: data.page.body[0],
      path: `/${data.page.slug}`
    })
  );
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

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>{data.page.title}</h1>
    <div class="article-body">
      {#each data.page.body as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </article>
</section>
