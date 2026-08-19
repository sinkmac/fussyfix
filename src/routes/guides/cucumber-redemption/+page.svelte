<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Cucumber — the Salad That Pooled Was Never the Cucumber';
  const description = 'Why cucumber goes watery and bland in the bowl, and how a few minutes with salt — plus the raw-thin and pickle routes — keeps it crisp and full of flavour. The method fix, in plain words.';
  const path = '/guides/cucumber-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why does cucumber make a salad go watery?',
      answer: 'Cucumber is mostly water, and slicing and serving it without preparation guarantees a wet, flavourless result. The high water content wants to leave the cucumber for the bowl. Salt draws it out before it goes in, concentrating the flavour and keeping the texture firm.'
    },
    {
      question: 'What is the best method for cucumber?',
      answer: 'Salt it. A few minutes with salt, a rinse and a dry towel changes everything — the water comes out of the cucumber, not into the salad. Then serve it raw-thin, or quick-pickle it for tang and crunch.'
    },
    {
      question: 'Is cucumber meant to be cooked?',
      answer: 'No. Cucumber does not respond to heat — it only releases water and collapses. Its redemption methods are raw-thin (ribbon or shaved, dressed and served immediately) and quick-pickle. The fix is never the stove.'
    }
  ]);
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
<SchemaScript schema={[schema, faq]} />

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Guide</div>
    <h1>Cucumber — the Salad That Pooled Was Never the Cucumber</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Cucumber has a quiet reputation problem. It isn't hated, exactly — it's forgotten. It's the wet, bland side-dish obligation, the four pale slices sweating into the salad bowl, the thing that makes a sandwich soggy. And it's one of the clearest cases in this book, because the fix takes about five minutes and almost nobody does it.</p>
      <p><strong>The cucumber that turned your salad into soup was not a bad cucumber. It was an unsalted one.</strong></p>
      <h2>What the plain slice does</h2>
      <p>The problem with cucumber is almost always its watery, bland, seedy interior — the part that makes a salad pool or a sandwich go soggy. Cucumber is mostly water, and that water is never content to stay put. Sliced and served without preparation, it guarantees a wet, flavourless result no matter how fresh the cucumber was. The fix is to deal with that water before it gets to the plate.</p>
      <h2>The fix — salt it, then do more with what's left</h2>
      <p>Cucumber's redemption isn't the oven — cucumber doesn't respond to heat, it only falls apart in it. The fix is raw, and it starts with salt.</p>
      <h3>Salt it — the five-minute fix that changes everything</h3>
      <p>Slice the cucumber (thin ribbons or coins), toss the slices with a little salt, and leave them for a few minutes. The salt works by osmosis, drawing the excess water out of the cucumber, which concentrates the flavour and keeps the texture firm. Then rinse the salt off and pat the slices dry with a towel. What's left is a crisp, actually-tastes-of-something cucumber — and no puddle in the bottom of the bowl.</p>
      <p>This single step (a pinch of salt, a few minutes, a rinse, a pat dry) fixes cucumber as a side salad, in a sandwich, anywhere it used to drain. It works because the enemy was never the cucumber — it was the water, and you got to the water first.</p>
      <h3>Raw-thin — for crisp, bright salad</h3>
      <p>Finely ribboned or shaved with a peeler or mandoline, dressed with acid and a little salt and served immediately, cucumber is crisp, delicate and fresh — the proper version of what the plain slice always meant to be.</p>
      <h3>Pickle it — for tang and crunch</h3>
      <p>Quick-pickled cucumber has real staying power: ribbons ready in 15 minutes, spears in 24 hours, a full sour ferment in 5–7 days. The acid and salt give it tang and crunch, and it keeps instead of going watery on you.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"The salad is still watery."</strong> The salt step was skipped, or the slices sat too long after being salted and rinsed without being dried. Rinse the excess salt off and pat dry properly — the drying is as important as the salting.</p>
      <p><strong>"The skin tastes bitter."</strong> Some skins run bitter, especially as cucumbers age. Peel or partly peel them, or use the seeded, peeled middle where the bitterness lives least. The structural details are easy to manage once you know they're there.</p>
      <p><strong>"My child finds cucumber boring."</strong> They met the wet, bland slice. The pickled cucumber is tangy and fun; the salted, crisp cucumber is actually crunchy. Both are a different proposition from the soggy side-dish version.</p>
      <h2>The kid-specific angle</h2>
      <p>Cucumber is a natural child food — crisp, cool, snack-shaped — until it's served as the sad, wet version. A few minutes of salting changes its whole standing on the plate, and the pickle route gives it crunch and drama.</p>
      <ul>
        <li><strong>Make it actually crunchy.</strong> Salt-and-dry treats the water so cucumber keeps its snap. Crunch is the selling point for most children.</li>
        <li><strong>Serve it as fingers or ribbons.</strong> Spears, batons and ribbons read as snack food. The salted version keeps them crisp enough to handle as fingers.</li>
        <li><strong>Try the pickle.</strong> Quick-pickled cucumber is tangy and bright — a fun, different texture that many children enjoy far more than raw slices.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Salted cucumber ribbons. Shave a cucumber into thin ribbons with a peeler, toss with a pinch of salt and a squeeze of lemon or a spoonful of vinegar, and leave for a couple of minutes. Rinse lightly, pat dry, and serve. Crisp, bright, tangy and dry — the flavour stays in the cucumber instead of pooling in the bowl. The cucumber that turned your salad into soup was an unsalted one. Salted, it's crisp and worth eating — and that difference is the entire method.</p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/cucumber">The cucumber redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/spinach-redemption">Spinach chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/cabbage-redemption">Cabbage chapter</a>
      <a href="/guides/brussels-sprouts-redemption">Brussels sprouts chapter</a>
      <a href="/guides/beetroot-redemption">Beetroot chapter</a>
      <a href="/guides/aubergine-redemption">Aubergine chapter</a>
      <a href="/guides/broccoli-redemption">Broccoli chapter</a>
      <a href="/guides/sweet-potato-redemption">Sweet potato chapter</a>
      <a href="/guides/parsnip-redemption">Parsnip chapter</a>
      <a href="/guides/courgette-redemption">Courgette chapter</a>
      <a href="/guides/runner-beans-redemption">Runner beans chapter</a>
      <a href="/guides/leek-redemption">Leek chapter</a>
      <a href="/guides/bell-pepper-redemption">Bell pepper chapter</a>
      <a href="/guides/safe-foods-fussy-eaters">Safe foods for fussy eaters</a>
      <a class="primary-button" href="/redeem">{toolCta}</a>
    </section>

    <section class="source-list" aria-label="Sources">
      <h2>Sources</h2>
      <ul>
        <li><a href={commonSources.nhsEatwell.url}>{commonSources.nhsEatwell.label}</a></li>
        <li><a href={commonSources.nhsHealthierFamilies.url}>{commonSources.nhsHealthierFamilies.label}</a></li>
      </ul>
    </section>
  </article>
</section>