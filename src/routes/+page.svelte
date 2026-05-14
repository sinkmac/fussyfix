<script lang="ts">
  import { affiliateLinks, generatorCopy, siteMeta } from '$lib/content';

  const ageOptions = ['1–2 years', '3–5 years', '6–8 years', '9–12 years'];

  let safeFoods = $state('');
  let ageGroup = $state('3–5 years');

  const safeFoodList = $derived(
    safeFoods
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean)
  );

  const generatedMeals = $derived(
    safeFoodList.length === 0
      ? []
      : Array.from({ length: 5 }, (_, index) => {
          const focus = safeFoodList[index % safeFoodList.length];
          return {
            title: `${focus} idea ${index + 1}`,
            body: `A gentle ${ageGroup.toLowerCase()} meal idea built around ${focus}, with one small nutritional win and no pressure to push beyond the safe-food zone.`
          };
        })
  );
</script>

<svelte:head>
  <title>{siteMeta.title}</title>
  <meta name="description" content={siteMeta.description} />
  <link rel="canonical" href={siteMeta.url} />
</svelte:head>

<section class="page-shell">
  <main class="page-grid">
    <section class="hero-card">
      <div class="eyebrow">{generatorCopy.eyebrow}</div>
      <h1>{generatorCopy.title}</h1>
      <p class="lede">{generatorCopy.description}</p>
      <ul class="hero-points">
        {#each generatorCopy.points as point}
          <li>{point}</li>
        {/each}
      </ul>
    </section>

    <section class="form-card">
      <form class="generator-form" onsubmit={(event) => event.preventDefault()}>
        <label class="field">
          <span class="field-label">Safe foods</span>
          <textarea
            bind:value={safeFoods}
            rows="6"
            placeholder="e.g. pasta, toast, chicken, peas, strawberries"
          ></textarea>
          <span class="field-help">Separate foods with commas or new lines.</span>
        </label>

        <label class="field">
          <span class="field-label">Age group</span>
          <select bind:value={ageGroup}>
            {#each ageOptions as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </label>

        <button class="primary-button" type="submit">Generate 5 meal ideas</button>
      </form>
    </section>

    <section class="results-card" aria-live="polite">
      <div class="results-header">
        <div>
          <div class="eyebrow eyebrow--soft">Your results</div>
          <h2>{generatorCopy.resultsTitle}</h2>
        </div>
      </div>

      {#if generatedMeals.length === 0}
        <div class="empty-state">{generatorCopy.resultsEmpty}</div>
      {:else}
        <div class="results-list">
          {#each generatedMeals as meal}
            <article class="result-item">
              <h3>{meal.title}</h3>
              <p>{meal.body}</p>
            </article>
          {/each}
        </div>
      {/if}

      <div class="affiliate-placeholder">
        <h3>{generatorCopy.affiliatePlaceholderTitle}</h3>
        <p>{generatorCopy.affiliatePlaceholderBody}</p>
        {#if affiliateLinks.iceland.url}
          <a class="affiliate-button" href={affiliateLinks.iceland.url} rel="sponsored nofollow noopener" target="_blank">
            {affiliateLinks.iceland.label}
          </a>
        {/if}
        {#if affiliateLinks.gousto.url}
          <a class="affiliate-secondary-link" href={affiliateLinks.gousto.url} rel="sponsored nofollow noopener" target="_blank">
            {affiliateLinks.gousto.label}
          </a>
        {/if}
        <p class="affiliate-disclosure">{generatorCopy.affiliateDisclosure}</p>
      </div>
    </section>
  </main>
</section>
