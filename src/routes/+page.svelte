<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables } from '$lib/data';

  const meta = pageMeta({
    title: 'FussyFix — vegetable redemption starts here',
    description: 'It was never the vegetable, it was the method. Find out how to cook the vegetables you thought you hated.',
    path: '/'
  });

  const featured = vegetables.vegetables.slice(0, 4);

  // Full chapter guides published free on the site. Data-driven so the "Free
  // chapters" grid stays in step as more vegetables are added.
  const chapters = [
    { name: 'Potato', path: '/guides/potato-redemption', blurb: 'The one that was "boring" — it was the pot of water.' },
    { name: 'Cauliflower', path: '/guides/cauliflower-redemption', blurb: 'Boiled nothing, becoming something in the oven.' },
    { name: 'Carrot', path: '/guides/carrot-redemption', blurb: 'The sugar you were boiling away.' },
    { name: 'Peas', path: '/guides/peas-redemption', blurb: 'Frozen peas only need heating, not cooking.' },
    { name: 'Spinach', path: '/guides/spinach-redemption', blurb: 'The flavour left in the pan.' },
    { name: 'Swede', path: '/guides/swede-redemption', blurb: 'The neep that was never meant to be boiled.' },
    { name: 'Tomato', path: '/guides/tomato-redemption', blurb: 'The winter pink one was never the vegetable.' },
    { name: 'Broad beans', path: '/guides/broad-beans-redemption', blurb: 'The skin was the problem, not the bean.' },
    { name: 'Cucumber', path: '/guides/cucumber-redemption', blurb: 'The salad that pooled was never the cucumber.' },
    { name: 'Cabbage', path: '/guides/cabbage-redemption', blurb: 'The smell was in the water, not the vegetable.' },
    { name: 'Brussels sprouts', path: '/guides/brussels-sprouts-redemption', blurb: 'The bitterness that isn\'t the method\'s fault.' },
    { name: 'Beetroot', path: '/guides/beetroot-redemption', blurb: 'The earthiness that isn\'t a cooking mistake.' },
    { name: 'Aubergine', path: '/guides/aubergine-redemption', blurb: 'The silky-slimy split that isn\'t a method failure.' },
    { name: 'Broccoli', path: '/guides/broccoli-redemption', blurb: 'The one that was just cooked too long.' },
    { name: 'Sweet potato', path: '/guides/sweet-potato-redemption', blurb: 'The sweet one that was boiled the good out of.' },
    { name: 'Parsnip', path: '/guides/parsnip-redemption', blurb: 'The woody core was the problem, not the sweetness.' },
    { name: 'Courgette', path: '/guides/courgette-redemption', blurb: 'The water you were cooking, not the vegetable.' },
    { name: 'Runner beans', path: '/guides/runner-beans-redemption', blurb: 'The strings were the problem, not the beans.' },
    { name: 'Leek', path: '/guides/leek-redemption', blurb: 'The grit and the faff, not the leek.' },
    { name: 'Bell pepper', path: '/guides/bell-pepper-redemption', blurb: 'The bitter skin, not the pepper.' }
  ];
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
  <div class="card" style="margin-bottom: 1.5rem; text-align: center; padding: 3rem 2rem;">
    <div class="eyebrow">Redemption starts here</div>
    <h1 style="font-size: 2.2rem; margin: 0.5rem 0; color: var(--brand-dark);">
      It was never the vegetable.<br>It was the method.
    </h1>
    <p class="lede" style="margin: 1rem auto;">
      You don't hate broccoli. You've had broccoli boiled to grey-green collapse, stalk and florets reduced to uniform mush in unsalted water.
    </p>
    <p class="lede" style="margin: 1rem auto;">
      Every vegetable has a redemption story. We match yours.
    </p>
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="/redeem" class="primary-button">Find your redemption method</a>
      <a href="/chart" class="secondary-button">This week's chart</a>
    </div>
  </div>

  <div style="margin-bottom: 1rem;">
    <div class="eyebrow">Featured vegetables</div>
  </div>
  <div class="veg-grid">
    {#each featured as veg}
      <a href="/redeem/{veg.id}" class="veg-card">
        <h3>{veg.name}</h3>
        <p class="failure-preview">{veg.childhoodFailureMode}</p>
        <div style="margin-top: 0.5rem;">
          <span class="badge badge--new" style="font-size: 0.7rem;">{veg.redemptionMethods.length} methods</span>
        </div>
      </a>
    {/each}
  </div>
  <div style="margin-top: 1rem; text-align: center;">
    <a href="/redeem" class="secondary-button">See all {vegetables.vegetables.length} vegetables →</a>
  </div>

  <div style="margin-top: 2rem;" class="card">
    <h2>Free chapters — the method, in full</h2>
    <p style="color: var(--text-muted); margin: 0 0 1rem;">Every chapter from the book, published free and in full. Most are clean method fixes; a few are honest about the vegetables that have a real biological or preference ceiling.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
      {#each chapters as chapter}
        <a href={chapter.path} class="veg-card">
          <h3>{chapter.name}</h3>
          <p class="failure-preview">{chapter.blurb}</p>
        </a>
      {/each}
    </div>
  </div>

  <div style="margin-top: 2rem;" class="card">
    <div class="eyebrow">The book</div>
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
      <div style="max-width: 520px;">
        <h2 style="margin: 0.3rem 0; color: var(--brand-dark);">The Fussy Eater Fix</h2>
        <p style="color: var(--text-muted); margin: 0;">
          Ten vegetables you were taught to hate, cooked the one way that works — full chapters, recipes, and the fussy-eater angle for each. It was never the vegetable. It was the method.
        </p>
      </div>
      <a href="/books/fussy-eater-fix/" class="primary-button">See the book</a>
    </div>
  </div>

  <div style="margin-top: 2rem;" class="card">
    <h2>How it works</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
      <div>
        <div class="eyebrow">1. Remember</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Think of a vegetable you thought you hated. The one that arrived boiled, grey, and sad.</p>
      </div>
      <div>
        <div class="eyebrow">2. Redeem</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Look it up. Find out why it failed — and which method turns it around.</p>
      </div>
      <div>
        <div class="eyebrow">3. Cook</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Follow the timing. Char it, roast it, blister it. Any appliance, any kitchen.</p>
      </div>
      <div>
        <div class="eyebrow">4. Revisit</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Come back each week. The chart tells you which vegetables are having their moment.</p>
      </div>
    </div>
  </div>
</section>