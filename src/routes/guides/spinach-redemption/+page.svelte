<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Spinach — the Flavour Left in the Pan';
  const description = 'Why boiled spinach becomes dark, slimy and flavourless, and why spinach is 90% water you should cook out hot and fast, not boil out slow. The method fix, in plain words.';
  const path = '/guides/spinach-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why does boiled spinach turn into a slimy puddle?',
      answer: 'Spinach is about 90 per cent water. Boiling releases that water into the pan and leaves behind a collapsed, flavourless shadow. The water that pools in the pan is the flavour you were hoping to eat.'
    },
    {
      question: 'What is the best method for spinach?',
      answer: 'Stop cooking it in water. Wilt it over high heat in a dry, hot pan for thirty seconds to a minute — the water stays on the leaf and the colour and flavour stay bright.'
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
    <h1>Spinach — the Flavour Left in the Pan</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>When you boil spinach, a puddle of green water collects in the bottom of the pan. That puddle is the flavour you were hoping to eat.</p>
      <p>Spinach is about 90 per cent water. Boiling it releases that water into the pan, and what's left behind is a collapsed, dark, flavourless shadow of what it was. The vibrant green turns dull, the texture turns slippery, and the result is the spinach everyone thinks they hate — which is a shame, because spinach, done properly, is one of the quickest, easiest, brightest vegetables there is.</p>
      <h2>What the boil does</h2>
      <p>Spinach cooked in water is exactly backwards. The leaf is mostly water already; adding more water doesn't cook it, it drowns it. Boiling (or slow, wet stewing) forces that water out and carries the flavour with it, leaving a slimy, dull-green residue. The water that pools in the bottom of the pan is the flavour you were hoping to eat. Cook it dry, and that flavour stays on the leaf.</p>
      <h2>The fix — high heat, dry, and over quickly</h2>
      <p>Spinach's redemption is wilting — cooking it over high heat in a dry pan for almost no time at all. The heat is intense enough to collapse the leaf in thirty seconds to a minute, so the water stays in the leaf rather than pooling in the pan, and the colour and bright flavour stay where they belong.</p>
      <h3>Blister or wilt it — the method that changes everything</h3>
      <p>Get a pan hot, add a little oil, drop in the spinach, and cook for 30 seconds to a minute, stirring, until it just wilts and turns bright green — not dark, not drowned. In a wok it takes 30–60 seconds. This is faster than boiling and nothing like it. The high heat dries the surface and keeps the flavour on the leaf.</p>
      <h3>Gentle-heat it — for a soft, silky finish</h3>
      <p>If you want spinach softer without the danger of the boil, steam it for 1–2 minutes, or warm it in a covered pan just until it wilts. Same principle, gentler: short, and not in a pool of water.</p>
      <h3>Raw-thin — spin without a pan</h3>
      <p>Young spinach is lovely raw — but dress it and serve it immediately, because thin leaves lose crispness and texture fast once dressed. It's bright, peppery and crisp at the moment it hits the plate.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"It came out brown and slimy."</strong> Too hot and too long, or you boiled it. Brown is the sign of spinach cooked past bright green; slime is the sign of too much water and too much time. High heat and under a minute is the whole answer.</p>
      <p><strong>"It's a watery puddle."</strong> That's the old method. If you wilted it properly in a dry, hot pan the water stays in the leaf and there's no puddle. One trick: leave washed leaves slightly dry — shocking wet leaves steam instead of wilt.</p>
      <p><strong>"My child won't touch green mush."</strong> They met the wrong spinach. Bright, just-wilted spinach is a different food from a grey-green sludge. Keep it green and it stops looking like a punishment.</p>
      <h2>The kid-specific angle</h2>
      <p>Spinach is one of the easiest greens to win because the fix is so fast — it's gone from the pan to the plate in under a minute, which means there's no work and no waiting for the child to decide it's a vegetable lesson.</p>
      <ul>
        <li><strong>Keep it green.</strong> The bright colour is the signal. As soon as it turns brown it looks like the spinach they already dislike.</li>
        <li><strong>Sneak it into something familiar.</strong> A handful wilted into a pasta sauce or omelette in the final minute disappears and adds green without being a green on the plate. That's not deception — it's spinach being spinach, as an ingredient.</li>
        <li><strong>Offer it raw, small.</strong> Some children accept young raw spinach leaves in a dressing they trust, where they'd refuse cooked spinach on principle. Raw is a legitimate version of this vegetable.</li>
        <li><strong>Name it honestly.</strong> Tell a child the truth — that spinach is a quick green, not a wet lump. What they dislike is a method, not the vegetable.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Wilted spinach. Heat a pan, add a little oil, drop in a generous handful of spinach and stir over high heat for 30 seconds to a minute, until it just turns dark green and collapses. Season with a pinch of salt and serve immediately. The whole dish is faster than boiling the kettle. The water stays on the leaf, the colour stays bright, and the spinach finally tastes like itself.</p>
      <p>The spinach that bored or disgusted you was boiled. Wilted hot and fast, the same leaves are bright, silky and quick — and that difference is the entire method.</p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/spinach">The spinach redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
      <a href="/guides/cabbage-redemption">Cabbage chapter</a>
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