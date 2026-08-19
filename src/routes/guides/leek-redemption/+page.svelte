<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Leek — the Grit and the Faff, Not the Leek';
  const description = 'Why leeks got a name for being fiddly and gritty — the silt trapped between the layers, and a boil that turns them into slippery ribbons. How a proper wash and a char, roast or slow-braise turn the same leek silky and sweet. The method fix.';
  const path = '/guides/leek-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why are leeks gritty and hard to deal with?',
      answer: 'Because of the dirt. Leeks grow with their bases in the soil, so sand and silt get trapped between the layers — one Reddit comment calls them "disgusting clods of earth bulging between the layers." Thoroughly washing or soaking them fixes it. The grit is a prep problem, not the leek.'
    },
    {
      question: 'What is the best method for leek?',
      answer: 'High, dry heat: char, roast or a slow, gentle sweat in butter. Boiling turns the layered leek into slippery, waterlogged green ribbons. Charring or roasting dries the surface, concentrates the flavour and makes it silky rather than gross — that is the transformation.'
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
    <h1>Leek — the Grit and the Faff, Not the Leek</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Nobody ever said they hated leeks. They said something subtler and more telling.<em> "Love leek flavour, hate leek faff."</em> That's the real complaint, and it's a fair one. The leek's reputation was never about taste — it was about the effort of dealing with it: the grit, the washing, the fiddly layers.</p>
      <p>And one specific memory does most of the damage. <strong>The grit — the silt and clods of earth trapped between the leek's layers.</strong> It's real, it's off-putting, and it is entirely fixable.</p>
      <h2>The two real problems: grit, and the generic boil</h2>
      <p>Leeks grow with their leaves closed against the soil, so sand and dirt get in between every layer. The grit is a real, immediate, off-putting experience — one Reddit comment describes "disgusting clods of earth bulging between the layers." But here's the honest part: that's a prep problem, not the leek. Wash it properly and the grit is gone.</p>
      <p>The second problem is the method almost everyone defaults to: boiling the leek into soft, slippery, waterlogged green ribbons. Boiled, the leek's structure turns gloopy, and the flavour — which is genuinely lovely, a milder, sweeter member of the onion family — dilutes into the water.</p>
      <h2>The fix — wash it properly, then cook it dry and warm</h2>
      <p>The leek redemption has two moves. Handle the grit honestly first, then use a method that concentrates instead of ruins.</p>
      <h3>The wash — do this without fail</h3>
      <p>Trim off the tough dark green tops, then <strong>split the leek lengthways</strong> and fan the layers out under running water, or slice first and wash the slices in a big bowl of water, lifting them out and leaving the grit behind. If a leek carries land, you'll see it. This one prep step removes the single biggest objection to leeks.</p>
      <h3>Char or roast it — the method that changes everything</h3>
      <p>Whole leeks halved lengthways, oiled and charred on a hot grill or in a cast-iron pan for 5–7 minutes per side (or roasted at 200°C for 20–25 minutes until the edges catch), turn sweet, silky and smoky. The high heat dries the surface, concentrates the flavour and transforms the texture from slippery to silky. This is the leek that ends "leek faff" — because it's easy and genuinely delicious.</p>
      <h3>Slow-braise or sweat it — for a soft, silky option</h3>
      <p>Thinly sliced leeks, sweated low and slow in butter for 8–12 minutes until completely soft and silky, are a different thing again — the classic base for all sorts of dishes. Silky, sweet, nothing like the slippery boiled strips. Warm and mellow, not a waterlogged rope.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"It's gritty."</strong> Under-washed. Split or slice, then soak or rinse thoroughly — the grit lives between the layers. If you bit grit, the wash was skipped.</p>
      <p><strong>"It's slippery."</strong> Boiled, or sweated in too much water. Use dry, high heat — char, roast — or sweat in just butter, and it turns silky instead of gross.</p>
      <p><strong>"It's bland."</strong> It boiled. A charred or slow-cooked leek carries a clear, sweet onion flavour — the boiled version washed it away.</p>
      <h2>The kid-specific angle</h2>
      <p>Leeks are a quieter speed — a sweet, mellow onion relative that doesn't announce itself. The biggest barrier is prep and reputation, not the taste.</p>
      <ul>
        <li><strong>Never let grit reach a child.</strong> Wash meticulously. A gritty bite teaches a child to refuse for years.</li>
        <li><strong>Lead with charred pieces.</strong> Soft, smoky, sweet leek alongside something familiar reads as food. The silky texture is generally well received.</li>
        <li><strong>Use them as a softening, sweetening base.</strong> Leeks in a familiar sauce or pasta add sweetness and mild onion without being the thing on the plate. Very achievable.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Charred leeks — split, washed, trimmed, oiled and charred until softened and golden at the edges, finished with salt and a walm of lemon or butter. Silky, sweet, smoky — nothing like the gritty, slippery version. Leeks were never hard, they were dirty and over-boiled. <strong>Wash them, cook them dry and warm, and you have one of the sweeter vegetables on the plate.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/leek">The leek redemption card</a>
      <a href="/guides/runner-beans-redemption">Runner beans chapter</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
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