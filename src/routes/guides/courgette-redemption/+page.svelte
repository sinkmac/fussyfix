<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Courgette Recipe: The Method That Fixes the Sliminess | FussyFix';
  const description = 'Why courgette arrives translucent and watery — it is 95% water, and slow low heat steams it in its own juices. How high heat and a short cook drive the water off, brown the surface and keep the flavour in. The method fix; plus the honest note on its mildness.';
  const path = '/guides/courgette-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why is courgette always soggy and watery?',
      answer: 'Because courgette is 95% water. Cooked slowly or at low heat, that water releases into the pan and the courgette steams in its own juices until it is translucent, watery mush. The fix is high heat and a short cook, which drives the moisture off and browns the surface before the interior can steam.'
    },
    {
      question: 'Does courgette have any real flavour?',
      answer: 'Courgette is genuinely mild — that is an honest note, not a fixable flaw. It takes flavour from what it is cooked with. But the texture difference between a charred, browned piece and a watery translucent disc is huge, and mild and pleasant with the right method is very different from wet and bland.'
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
    <h1>Courgette — the Water That Was Cooked Instead of the Courgette</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>There is a reason courgette turned up on the plate looking like pale, translucent, wet glass. Courgette gives water away for a living: it is about 95% water. And the way most of us were taught to cook it — slowly, at low heat, sliced into a pan — is the exact recipe for a watery, flavourless disc.</p>
      <p>Here's the freeing fact. <strong>The water that pooled in the pan was the flavour you lost.</strong> Cook courgette hot and fast, and that water stays in the courgette instead of steaming it into mush.</p>
      <h2>What low, wet heat does</h2>
      <p>Cook courgette slowly or at low heat and the water in its cells releases into the pan. Left to steam in its own juices, the slices turn glassy, collapse, and their flavour — mild at the best of times — drains away entirely. The result is hot, wet nothing. The vegetable wasn't overcooked by accident; it was cooked in the one way that guarantees a watery result.</p>
      <h2>The fix — high heat, short time</h2>
      <p>The redemption is hot and fast. Hot enough to drive the moisture off the surface and brown the flesh before the interior can release much more water. A hot pan, a thin slice, two minutes a side.</p>
      <h3>Char or blister it — the method that changes everything</h3>
      <p>Slice courgette lengthwise into 1cm ribbons or coins, season, and cook in a hot oiled pan or on a grill for 2–3 minutes per side until deeply browned with char lines (wok: 2–4 minutes, high). Air fryer: 8–10 minutes at 200°C. The browning is everything — charred here gives it a savoury, nutty note and a bite, the opposite of the wet disc. This is the courgette that changes minds.</p>
      <h3>Use it raw, thin — the trick most people never try</h3>
      <p>Courgette that has never met a pan has none of the soggy problem at all. Mandolined or finely sliced fine ribbons, dressed with salt, lemon and olive oil, are fresh, crisp and pleasant — a completely different ingredient from the cooked version. It's a surprising conversion for people who thought they hated courgette.</p>
      <h3>When you do cook it soft</h3>
      <p>If you want softened courgette, don't steam it in its own water — cook it hot first, then lower the heat, or salt the slices and drain before cooking. Salting and patting dry pulls the water out ahead of time, so what reaches the pan is courgette that can brown instead of steam.</p>
      <h2>The honest note — it's mild, and that's okay</h2>
      <p>Courgette is <strong>genuinely mild</strong>. This is not a vegetable that arrives on its own shouting. The honest position is that courgette takes flavour from what it's cooked with — the smoke of the char, the salt and lemon of the raw version. What the method changes is the texture: hot, browned, crisp courgette is a food; wet, translucent courgette is a lesson in why people say they don't like it. If you were expecting strong flavour, no method makes courgette that — but "mild and properly textured" is a long way from "wet and bland."</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"It went watery again."</strong> It was cooked too long at too low a heat, or piled in a pan so it steamed instead of browned. High heat, small batches, and pull it out the moment it browns.</p>
      <p><strong>"Giant courgettes are terrible."</strong> True — big garden marrows are genuinely watery and seedy, a real attribute issue. Choose small, firm courgettes, which are almost a different vegetable.</p>
      <p><strong>"It's bland."</strong> That's the honest mildness. Season well and pair it — salt, lemon, garlic, chilli, or a savoury sauce. The method delivers texture; give the flavour a hand.</p>
      <h2>The kid-specific angle</h2>
      <p>Courgette's mild green and soft-fresh texture make it one of the easier vegetables for children — when it isn't a watery grey disc.</p>
      <ul>
        <li><strong>Serve it crisp and colourful.</strong> Charred courgette ribbons with a little salt read as food; the wet disc reads as a problem on the plate.</li>
        <li><strong>Go raw-thin for a crunchy introduction.</strong> A mandolined raw courgette strip is fresh, crisp and mild — friendly to a child who refuses cooked courgette.</li>
        <li><strong>Hide it into what they already eat.</strong> Because courgette is mild, it disappears into sauces, patties and loaves without being noticed — an easy win for getting a changing food in.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Charred courgette ribbons — sliced lengthways, oiled and salted, cooked on a grill or a hot pan for 2–3 minutes per side until deeply browned, finished with lemon. Bright, savoury, with a bite — nothing like the translucent watery discs of memory. The courgette that was "watery" was cooked hot enough to brown or too long. Cook it hot and fast, and the water stays where it belongs. <strong>That difference is the entire method.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/courgette">The courgette redemption card</a>
      <a href="/guides/aubergine-redemption">Aubergine chapter</a>
      <a href="/guides/bell-pepper-redemption">Bell pepper chapter</a>
      <a href="/guides/cucumber-redemption">Cucumber chapter</a>
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