<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Parsnip — the Woody Core Was the Problem, Not the Sweetness';
  const description = 'Why the parsnip you were served was fibrous and tough even when the outside was mush — the woody core, and parsnips that were too big to begin with. How roasting with the core removed, or choosing smaller roots, turns it sweet and creamy. The method fix.';
  const path = '/guides/parsnip-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why is parsnip woody and tough?',
      answer: 'Because of the core. Parsnips develop a woody core as they grow, and large parsnips have a core that stays fibrous and tough even after cooking. Boiling makes it worse — the outer flesh turns to sweet mush while the core stays hard. Removing the core, or choosing smaller parsnips, solves both problems.'
    },
    {
      question: 'What is the best method for parsnip?',
      answer: 'Roast it. Dry heat caramelises the natural sugars, crisps the exterior, and the tender-cream interior is nothing like a fibrous boiled root. If a parsnip is large, halve it and cut the woody core out before roasting — the same root then cooks sweet and tender.'
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
    <h1>Parsnip — the Woody Core Was the Problem, Not the Sweetness</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>The parsnip has a trick that divides people in a way almost no other root does. Childhood parsnip tends to arrive in one of two sad forms: a fibrous, woody stick that puts up a fight, or a sweet mush that collapses on the fork. Neither of those is the vegetable it can be.</p>
      <p>Here's the freeing fact. <strong>That woody core is a real structure — and you can take it out.</strong> The parsnip that was "woody" was either too big to begin with, or the core was never removed. Neither is a fixed property of parsnip.</p>
      <h2>What the boil does — and what the core does</h2>
      <p>There are two separate problems, and they get blamed on the one parsnip. The woody core is a structure that develops as the parsnip grows — large parsnips keep a fibrous, tough core even after cooking. Boiling makes the other half worse: it turns the outer flesh to sweet mush while leaving the core untouched. So you get a parsnip that is somehow both mushy and woody at once — the worst of both, in a single vegetable.</p>
      <p>The fix attacks both. <strong>Choose smaller parsnips</strong> (they're sweeter and rarely develop the core), and <strong>remove the core from any large ones.</strong> Then cook it dry and hot.</p>
      <h2>The fix — dry heat that turns the sweetness up</h2>
      <p>Roasting is the parsnip method. Dry heat caramelises the natural sugars, crisps the exterior, and the interior that's left after the core is removed becomes tender-cream — nothing like fibrous mush.</p>
      <h3>Roast it — the method that changes everything</h3>
      <p>Peel, halve lengthways, remove the woody core from any large parsnip, and cut into even batons. Toss in a little oil and salt, and roast at 200°C for 25–35 minutes until deeply golden, sticky and caramelised at the edges (air fryer: 15–22 minutes at 190°C). The browning is the point — sticky-sweet on the outside, tender-cream within. Honeyed, maple or a little balsamic in the last few minutes turns them into a genuinely sweet-favourite vegetable.</p>
      <h3>Char it — the smoky side</h3>
      <p>Thick roast-style batons or whole small parsnips on a hot grill or cast iron (12–15 minutes, turning) take a smoky char that balances the sweetness. High heat, short time, over before the interior can go fibrous.</p>
      <h3>Braise it — silky and mellow</h3>
      <p>Core removed and cut into pieces, parsnips braise into silk — 20–30 minutes in stock or butter with aromatics, the sweetness concentrated, the texture soft rather than stringy.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"It's still woody."</strong> The core was left in, or the parsnip was huge. Halve it and cut the dense core out before cooking. If a parsnip is woody past saving, it was too big — choose smaller next time.</p>
      <p><strong>"It's mushy collapse."</strong> Boiled — the old failure. Dry heat that stays dry keeps the parsnip's structure. Roast or char it.</p>
      <p><strong>"It's bland."</strong> Under-roasted, or cooked with the sweetness asked to do all the work alone. The dry, caramelised edges are where parsnip's flavour lives; get them golden and it stops being bland.</p>
      <h2>The kid-specific angle</h2>
      <p>Parsnip's sweetness is genuinely child-friendly — roasted parsnips are one of the sweeter things you can put on a plate. The enemy is the woody or mushy version that gave it a reputation as a "bitter root."</p>
      <ul>
        <li><strong>Serve them sweet and crisp.</strong> Deeply caramelised roasted batons taste like a treat. That's the parsnip to lead with.</li>
        <li><strong>Core them before they ever meet a child.</strong> A woody parsnip is a memorable bad texture — remove the core so the child learns the soft, sweet one.</li>
        <li><strong>Little sweetness goes a long way.</strong> Roasted with a touch of honey or maple, parsnips read as better than chips to many kids. Use the sweetness that's already there.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Roasted parsnip batons — peeled, halved, cored and quartered, oiled and salted, roasted at 200°C for 25–35 minutes until deeply caramelised and sticky at the edges. Sweet, creamy, tender-crisp, with the wooden core gone and the natural sugar turned up. The parsnip that was "woody" was either too big or boiled too long. Core it, roast it, and it's one of the sweetest things on the plate. <strong>Both problems were fixable — that difference is the entire method.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/parsnip">The parsnip redemption card</a>
      <a href="/guides/carrot-redemption">Carrot chapter</a>
      <a href="/guides/sweet-potato-redemption">Sweet potato chapter</a>
      <a href="/guides/potato-redemption">Potato chapter</a>
      <a href="/guides/swede-redemption">Swede chapter</a>
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