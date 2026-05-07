<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.page.title} | FussyFix</title>
  <meta name="description" content={data.page.body[0]} />
  <link rel="canonical" href={`https://fussyfix.co.uk/${data.page.slug}`} />
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
