<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Brussels Sprouts Recipe: The Honest Fix (Not for Everyone) | FussyFix';
  const description = 'Why sprouts carry real bitterness — a genetic variant (TAS2R38) makes some people far more sensitive — and what roasting can and cannot do. An honest ceiling, with the best method for those it works for.';
  const path = '/guides/brussels-sprouts-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why are brussels sprouts bitter no matter how they\'re cooked?',
      answer: 'Bitterness in sprouts is real. Some people carry a genetic variant (TAS2R38) that makes them far more sensitive to the bitter compounds in brassicas. High-heat roasting reduces the bitterness by caramelising sugars and creating savoury Maillard compounds that mask it, but it does not eliminate the genetic difference.'
    },
    {
      question: 'Is there a method that fixes sprouts for everyone?',
      answer: 'No — and this is the honest ceiling. Roasting or charring makes the best possible sprout and genuinely helps most people, but for someone with the TAS2R38 sensitivity the bitterness is partly biological. If you\'ve tried sprouts roasted every way and still find them bitter, that is not a failure of method.'
    },
    {
      question: 'What is the best way to cook sprouts for someone who may be sensitive?',
      answer: 'Halved and roasted or charred at high heat — the caramelised, crisp edges and savoury browning mask the bitterness best. But manage the expectation: it helps most people, not all, and that\'s the honest position.'
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
    <h1>Brussels Sprouts — the Bitterness That Isn't the Method's Fault</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Here's the honest version, stated up front: <strong>brussels sprouts are not a clean win.</strong> This is one of the vegetables where the method helps enormously, but cannot promise to fix it for everyone — because some of the problem is biology, not cooking.</p>
      <p>That's not a reason to skip this chapter. It's the reason to read it with the right expectation.</p>
      <h2>What the boil did — and it was real</h2>
      <p>Boiled sprouts are a legend of the school-dinner era for a reason. Boiled sprouts release the same sulphur compounds as cabbage, from the same brassica chemistry. The longer they boil, the more the outer leaves disintegrate into grey mush while the interior stays hard, and the cross-cut base — a traditional preparation — makes it worse by opening the sprout to water penetration on one side. The kitchen smells of overcooked brassica for hours.</p>
      <p>That much is entirely a method problem, and it's fixable. But there's a second layer that cooking alone can't remove, and it's important to be honest about it.</p>
      <h2>The honest ceiling — bitterness is partly biological</h2>
      <p>Bitterness in brussels sprouts is real, and some of it is genetic. A significant minority of people carry a variant of a gene called <strong>TAS2R38</strong>, which makes them far more sensitive to the bitter compounds in brassicas — the same chemistry that gives cabbage, broccoli and sprouts their bitter edge. For those people, sprouts taste noticeably more bitter no matter how they're prepared.</p>
      <p>This is the part that the "method fixes everything" framing usually hides, and it's worth naming plainly: <strong>if you have tried sprouts roasted every way and still find them bitter, that is not a failure of method — it is your biology, and it is not the vegetable's fault or yours.</strong></p>
      <p>The good news is that this sensitivity sits on a spectrum. Most people are not strongly affected, and for most people the right method genuinely transforms sprouts. The honest goal here is not "I now love sprouts" for everyone — it's "I've found the best possible version of them, or I've understood why they're not for me."</p>
      <h2>Best method — high heat, halved, and caramelised</h2>
      <p>For the majority who can be won over, the method that does the most is roasting or charring — and it's the same move that fixes every brassica.</p>
      <h3>Roast them — the best method</h3>
      <p>Halve the sprouts, oil them, and roast cut-side down at 200°C for 25–35 minutes until deeply golden and crisp at the edges. Air fryer: 15–20 minutes at 190°C. Halving is key — it exposes the cut surface to direct heat, triggers the Maillard reaction, and caramelises the natural sugars. The browning makes a sweet, savoury, nutty sprout, and that savoury browning is precisely what masks the bitterness for most people.</p>
      <h3>Char them</h3>
      <p>Halved, oiled, and charred on a hot grill or in a cast-iron pan (10–12 minutes, cut-side down) gives the same caramelisation with a smoky edge — another way to build the browning that counters the bitter.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"They're still bitter."</strong> Two possibilities, and you should know which is which. First, if they were cooked wet and long, that's a method slip — redo them halved and roasted and see the difference. Second, if they're roasted well and still bitter, you may be one of the TAS2R38-sensitive people. That's biology, not a bad sprout or a bad cook.</p>
      <p><strong>"The outside burned before the inside cooked."</strong> Too high, or the sprouts were too crowded. Spread them out, cut them evenly, and let the browning happen at a steady 200°C rather than blasting them.</p>
      <h2>The kid-specific angle</h2>
      <p>With children, the same honesty applies — and it matters even more, because you can't argue with a child's taste buds the way you can with an adult's.</p>
      <ul>
        <li><strong>Give them the best chance, once.</strong> Roasted, halved, caramelised sprouts are the version to offer first — the crisp edges are genuinely child-friendly and sweet. Boiled sprouts are the version that seals a lifelong refusal.</li>
        <li><strong>But respect the possibility they're sensitive.</strong> If a child is genuinely TAS2R38-sensitive, no amount of roasting changes the bitterness for them, and pressure makes it worse. If roasted sprouts are refused, that may be a real biological wall, not fussiness.</li>
        <li><strong>Frame it honestly.</strong> A child who's told "these may taste bitter to you and that's not your fault" is more likely to try than one told "you just don't like vegetables." Honesty about limits builds more trust than a promise that can't hold.</li>
      </ul>
      <h2>One honest fix</h2>
      <p>Roast sprouts properly — halved, oiled, cut-side down at 200°C for 25–35 minutes until the edges are caramelised and crisp. For most people this genuinely turns them around. For the minority who still taste bitter, it gives them the best possible version of the vegetable — and an honest answer about why it's not for them. Both outcomes are worth having. <strong>The ceiling isn't a cop-out; it's the difference between a promise and the truth.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/brussels-sprouts">The sprouts redemption card</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/cauliflower-redemption">Cauliflower chapter</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/spinach-redemption">Spinach chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
      <a href="/guides/tomato-redemption">Tomato chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
      <a href="/guides/cabbage-redemption">Cabbage chapter</a>
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