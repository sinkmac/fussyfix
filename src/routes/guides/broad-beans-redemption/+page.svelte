<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Broad Beans — the Skin Was the Problem, Not the Bean';
  const description = 'Why broad beans arrive grey, tough-skinned and mealy, and how double-shelling — blanch, slip the skins, cook the bright green inside — turns them into a completely different ingredient. The method fix.';
  const path = '/guides/broad-beans-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why are broad beans grey, tough and mealy?',
      answer: 'Because the skins were kept on and the bean was boiled until the skin toughened and the interior turned floury. The tough grey skin is the texture people remember — it sticks to the roof of the mouth. The bean inside is bland and pasty. The skin, not the bean, was the problem.'
    },
    {
      question: 'What is double-shelling and why does it work?',
      answer: 'Double-shelling means blanching the beans, slipping off the tough grey skins, then cooking only the bright green inner bean briefly and gently. The second cooking is short and preserves the creamy texture and sweet flavour. It is the single biggest redemption for broad beans.'
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
    <h1>Broad Beans — the Skin Was the Problem, Not the Bean</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Broad beans have a claim few vegetables can make: they are the most mis-cooked vegetable in the British kitchen. And it's not because they're hard to cook well. It's because one specific thing — the grey skin — has been doing ruinous work for generations, and almost nobody got told how to fix it.</p>
      <p><strong>The skin was the problem. Not the bean. And you can take the skin off.</strong></p>
      <h2>What the childhood broad bean did</h2>
      <p>Boiled until the outer skin is tough and the inner bean is mealy, broad beans arrive on the plate as grey, floury bullets. The tough grey skin sticks to the roof of your mouth — that's the texture people genuinely remember — and the bean inside is bland and pasty. You were eating the skins, and the skins are the worst part.</p>
      <p>The redemption most people never learn is<strong> double-shelling</strong>: slip the skins off, and cook only the bright green interior bean. The bean that was "chewy and bland" was never properly shelled. Once the skins are off, the same bean is a completely different ingredient.</p>
      <h2>The fix — double-shelling, and a short second cook</h2>
      <p>Here's the whole method, and it's genuinely quick once you know it.</p>
      <h3>The double-shell (the move that changes everything)</h3>
      <ol>
        <li><strong>Pod</strong> the beans out of the long pods.</li>
        <li><strong>Blanch</strong> them in simmering water for 2–3 minutes (or steam for 3–4) — just enough to loosen the skins.</li>
        <li><strong>Slip the skins off</strong> with your fingers. The bright green bean under each grey skin is the ingredient you're after.</li>
        <li><strong>Cook those green beans briefly and gently</strong> — 2–4 minutes at most, in a little butter or oil, just to warm and tenderise them.</li>
      </ol>
      <p>The second cooking is short and gentle precisely because the bean is already almost there. Done this way you get bright, creamy, sweet broad beans — the opposite of the grey floury bullets.</p>
      <h3>Also works</h3>
      <p><strong>Blister them:</strong> once shelled, drop the green beans into a hot oiled pan for 3–5 minutes (wok, 2–4) for a pop-tender, brighter result. <strong>Braise them:</strong> 25–40 minutes in stock with aromatics for a mellow, silky version. <strong>Raw-thin, young beans:</strong> pod, peel, dress and serve immediately for a sweet, creamy-crunch, fresh bean.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"The skins won't come off."</strong> The beans weren't blanched enough. They need that short simmer or steam to loosen the skin — if the skins fight you, give them another minute, then drain and slip.</p>
      <p><strong>"They're still mealy."</strong> They were over-cooked after shelling, or you told the skin to do too much. Once shelled, the green bean needs minutes, not a long boil — and it never needs to be grey again.</p>
      <p><strong>"Is all this shelling worth it for a child?"</strong> Yes, for the bright green interior it reveals. The shelled bean is creamy and sweet — genuinely pleasant — where the grey skin was off-putting. The prep buys the redemption.</p>
      <h2>The kid-specific angle</h2>
      <p>Broad beans are one of the vegetables where the fix is almost a reveal — the thing under the skin is so much better than the thing most children associate with broad beans that it reads as a different food entirely.</p>
      <ul>
        <li><strong>Lead with the green.</strong> The bright, shelled bean looks like a food; the grey-skin version looks like a problem. Show a child the green first and you've already won half the case.</li>
        <li><strong>Let them help shell.</strong> Popping the little green beans out of the skins is quietly satisfying and gives a child something to do with dinner. Ownership is the easiest buy-in.</li>
        <li><strong>Keep them creamy and pretty.</strong> A sweet, bright broad bean in a little butter is a spoonable food — different from the floury grey bullets and far friendlier.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Double-shelled broad beans in butter. Pod the beans, blanch 2–3 minutes, slip the grey skins off, then warm the bright green beans in a little butter for 2–4 minutes with a pinch of salt. Sweet, creamy, bright, and nothing like the grey floury beans you were taught to dread. The broad bean that was "chewy and bland" was never double-shelled. Shelled, it's a genuinely lovely ingredient — and that difference is the entire method.</p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/broad-beans">The broad beans redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/spinach-redemption">Spinach chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
      <a href="/guides/cabbage-redemption">Cabbage chapter</a>
      <a href="/guides/brussels-sprouts-redemption">Brussels sprouts chapter</a>
      <a href="/guides/beetroot-redemption">Beetroot chapter</a>
      <a href="/guides/aubergine-redemption">Aubergine chapter</a>
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