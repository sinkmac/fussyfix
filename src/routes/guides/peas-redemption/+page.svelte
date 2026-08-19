<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Peas — the Ones That Only Need Heating, Not Cooking';
  const description = 'Why frozen peas boiled from frozen turn into grey bullets, and why they are already cooked — they need gentle heat, not a boil. The method fix, in plain words.';
  const path = '/guides/peas-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why do boiled frozen peas turn grey and starchy?',
      answer: 'Frozen peas are blanched before freezing — they are already cooked. Boiling them from frozen leaches the natural sweetness, toughens the skin, and fades the bright green colour. They need gentle heating, not cooking.'
    },
    {
      question: 'What is the best method for frozen peas?',
      answer: 'Gentle heat — warming through in a covered pan with a knob of butter, or adding them to a dish in the last two minutes of cooking. That preserves the sweetness and the bright green colour. The boil was the problem, not the pea.'
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
    <h1>Peas — the Ones That Only Need Heating, Not Cooking</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>There is a very good reason peas are served grey, wrinkled, and starchy in so many kitchens: the cook was taught to boil them. And peas are the vegetable that boiling makes no sense for at all.</p>
      <p>Here is the fact most of us were never told. <strong>Frozen peas are already cooked.</strong> They are blanched before freezing — that's how they keep their colour and sweetness in the bag. So when you boil them for eight minutes from frozen, you are not cooking them. You are overcooking something that was already done.</p>
      <h2>What the boil does to a frozen pea</h2>
      <p>Boiled from frozen, peas arrive on the plate as grey-green bullets, the skin wrinkled and the interior starchy and dull. The long boil leaches the natural sweetness and the high heat toughens the skin. The bright green colour that should signal freshness fades to a uniform grey. The longer they sit in boiling water, the worse each of these gets.</p>
      <p>The pea was never the problem. The boil was. <strong>Frozen peas need heating, not cooking.</strong></p>
      <h2>The fix — gentle heat, and not much of it</h2>
      <p>The redemption is to stop boiling peas entirely. They need to be warmed through — not cooked — and the gentlest heat that does that is the right one.</p>
      <h3>Gentle heat — the best method</h3>
      <p>Put frozen peas in a covered pan with a knob of butter and a splash of water, and warm them through for two to three minutes, shaking once or twice, until they're just hot and still bright green. Or add them to whatever you're cooking in the last two minutes. The steam inside the covered pan does the work without ever boiling them. The sweetness stays in the pea, the colour stays bright, and the skin stays tender.</p>
      <h3>Blister them — pop-bright and sweet</h3>
      <p>For something with more character, drop frozen (or fresh) peas into a hot, oiled pan for three to four minutes — or a wok for two to three — and let them blister. The high heat is brief, so it browns the surface and concentrates the sweetness rather than leaching it. Peas done this way pop bright and taste sweet, and they read as food rather than obligation.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"They're still grey."</strong> They sat in boiling water too long, or you cooked them a day ahead and reheated. Grey is the signature of the boil — keep the heat gentle and the time short.</p>
      <p><strong>"The skin is tough and wrinkled."</strong> High heat. Boiling or frying them too hot for too long toughens the skin. Gentle heat keeps them tender.</p>
      <p><strong>"My child says peas taste like nothing."</strong> They met the boiled version. Give them the gentle-heat pea, or better, the blistered one — sweetness and pop, no grey. It is a different food.</p>
      <h2>The kid-specific angle</h2>
      <p>Peas are already one of the more child-friendly vegetables, so the fix here is quiet: stop ruining them. A bright green, sweet pea is a genuinely easy win on most plates.</p>
      <ul>
        <li><strong>Keep them bright.</strong> The colour is the selling point. A pea that is still green and round reads as friendly; a grey one reads as punishment.</li>
        <li><strong>Make them a pop.</strong> The blistered version has a little drama and a lot of sweetness — good for a child who finds vegetables boring.</li>
        <li><strong>Let them be an ingredient, not a side.</strong> Fold peas into pasta, rice, or a sauce in the last minute. They become part of a familiar food rather than a separate green obligation.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Buttered peas. Put frozen peas in a covered pan with a knob of butter and a splash of water. Warm for two to three minutes, shaking once, until just hot and still bright green. That's it — no boil, no timer panic, no grey. The pea was already cooked; all it needed was to be warmed, and for the water to be left out of the way.</p>
      <p>The pea that arrived grey and starchy was boiled. Warmed gently — or blistered hot and fast — the same pea is bright, sweet and tender. That difference is the entire method.</p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/peas">The peas redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/spinach-redemption">Spinach chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
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