<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import SafeAdventurePromo from '$lib/SafeAdventurePromo.svelte';
  import { generatorCopy, siteMeta } from '$lib/content';

  const ageOptions = ['1–2 years', '3–5 years', '6–8 years', '9–12 years'];

  let safeFoods = $state('');
  let ageGroup = $state('3–5 years');

  const safeFoodList = $derived(
    safeFoods
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean)
  );


  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'FussyFix',
        url: siteMeta.url,
        description: siteMeta.description
      },
      {
        '@type': 'WebApplication',
        name: 'FussyFix meal idea generator',
        url: siteMeta.url,
        description: siteMeta.description,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' }
      },
      {
        '@type': 'Organization',
        name: 'AI Scotland Productions',
        url: 'https://aiscotlandproductions.com'
      }
    ]
  };

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
  <meta property="og:title" content={siteMeta.title} />
  <meta property="og:description" content={siteMeta.ogDescription} />
  <meta property="og:url" content={siteMeta.url} />
  <meta property="og:type" content="website" />
</svelte:head>

<SchemaScript schema={homepageSchema} />

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
      <section class="method-block" aria-labelledby="method-heading">
        <h2 id="method-heading">Safe-food first, not pressure first.</h2>
        <p>
          FussyFix starts with foods your child already accepts and builds meal ideas inside that safe-food zone.
          It is not medical advice, not an ARFID diagnosis, and not treatment. If eating feels unsafe, growth is affected,
          or mealtimes are causing serious distress, speak to a GP, dietitian, or qualified clinician.
        </p>
      </section>
    </section>

    <section class="form-card">
      <form class="generator-form" onsubmit={(event) => event.preventDefault()}>
        <label class="field">
          <span class="field-label">Safe foods</span>
          <textarea
            bind:value={safeFoods}
            rows="6"
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
        <SafeAdventurePromo />
      {/if}
    </section>
  </main>
</section>
