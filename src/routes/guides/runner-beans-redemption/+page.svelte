<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { arfidDisclaimer, articleSchema, commonSources, faqSchema, toolCta } from '$lib/editorial';

  const title = 'Runner Beans — the Strings Were the Problem, Not the Beans';
  const description = 'Why runner beans come out stringy, squeaky and bland — the string was never removed and the pods were cooked too long. How a brief steam or blanch, with the strings gone, turns them bright, crisp and sweet. The method fix.';
  const path = '/guides/runner-beans-redemption';
  const meta = pageMeta({ title, description, path });
  const schema = articleSchema({ title, description, path });
  const faq = faqSchema([
    {
      question: 'Why are runner beans stringy and squeaky?',
      answer: 'Because the string — a real tough strip along the edge of the bean — was never removed, and the pods were cooked too long. The string squeaks against the teeth like rubber, and the long cook turns the beans grey, waterlogged and bland. Remove the string and cook briefly and gently and the same bean is bright, crisp and firm-tender.'
    },
    {
      question: 'Is that "meh"/bland reputation deserved?',
      answer: 'No more than most vegetables — it is the mis-cooked version that has the reputation. People who have only met the stringy, boiled, grey bean call it bland or boring. Beans with the strings removed and cooked properly have a nice, almost crisp texture and a clean flavour — genuinely different.'
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
    <h1>Runner Beans — the Strings Were the Problem, Not the Beans</h1>
    <div class="article-meta">
      <span>By Sinclair McLay</span>
      <span>Published: 18 Aug 2026</span>
      <span>Last updated: 18 Aug 2026</span>
    </div>
    <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> This is about cooking, not child nutrition. For help with a child's overall eating, speak to your doctor or health visitor. <a href="/medical-disclaimer">Read the medical disclaimer</a>.</div>

    <div class="article-body">
      <p>Runner beans have a reputation that a single Reddit comment captured neatly — <em>"Runner beans? Meh."</em> And if your only experience of them is the classic UK school-dinner version — grey-green, stringy, waterlogged, tasting of the water they were boiled in — then "meh" is polite.</p>
      <p>But here's the thing. That stringy, squeaky bean was not the vegetable. <strong>The beans that squeaked against your teeth had two problems, and both were fixable: the strings were left in, and they were cooked too long.</strong></p>
      <h2>What the lasting string actually is</h2>
      <p>Runner beans have a real structure that most of us were never taught to deal with: a long, tough string running along each edge of the pod. The childhood version rarely removed it, so a single tough, chewy strip ran the whole length of the bean and squeaked against your teeth like rubber. On top of that, the pods were boiled for too long — grey-green, waterlogged, tasting of the water.</p>
      <p>Remove the strings and cook the pods properly and the same bean is bright, crisp and firm-tender. One grown-its-own-favour converter put it plainly: the beans then have a nice almost-crisp texture and taste, quite different from a regular green bean.</p>
      <h2>The fix — a brief string, and a gentle cook</h2>
      <p>The runner bean redemption is short and specific. There are two moves, and both matter.</p>
      <h3>Top and string them — the move that changes everything</h3>
      <p>Before anything else, top the beans and pull the string off each side, from the pointed end down. Slice them diagonally into pieces if you like — thin enough that nothing is chewy. This is the single most important step, and the one almost nobody was shown. Cooked stringless, runner beans are a different ingredient.</p>
      <h3>Gentle heat, and not for long</h3>
      <p>Steam stringed runner beans for 3–4 minutes, or blanch them in well-salted boiling water for 2–3, then drain the moment they're bright green and tender-crisp. The short cook keeps the colour and the bite; the well-salted water -- if you've blanched — seasons as it cooks. Stop while there's structure — the crisp, firm-tender bean is the point.</p>
      <h3>Also works</h3>
      <p><strong>Blister them</strong> in a hot oiled pan for 3–5 minutes (wok, 2–4) for a brighter, more intense version. <strong>Pickle</strong> stringed runner beans in a quick brine for tang and crunch. <strong>Eat young beans raw-thin</strong> — very fresh, young pods sliced and dressed are sweet and crisp without any cooking at all.</p>
      <h2>When it still goes wrong</h2>
      <p><strong>"They're still stringy."</strong> The string wasn't fully removed, or the beans were large and tough. Top them properly and string every side — a chewy strip is a string-not-removed problem, not a bean problem.</p>
      <p><strong>"They're grey and squeaky."</strong> Cooked too long, or cooked before stringing. Short and gentle keeps the green and the bite.</p>
      <p><strong>"They taste of water."</strong> The classic boil. If you blanch, use well-salted water and drain fast. Stringed, salted and stopped early, runner beans are bright and clean, not watery.</p>
      <h2>The kid-specific angle</h2>
      <p>Runner beans have the odd advantage of being a vegetable many children meet only in a form that looks like a problem — grey, stringy, squeaky. The fixed version is bright green and crisp, which is a far easier sell.</p>
      <ul>
        <li><strong>Strings gone, always.</strong> Never let a chewy strip reach a child. The texture that makes children say no is the one you remove first.</li>
        <li><strong>Bright and crisp.</strong> Serve them still with a bite, not collapsed. Green and firm-tender reads as food.</li>
        <li><strong>Small, sliced pieces.</strong> Diagonal slices are easy to pick up. Pair with something familiar and don't make them the focus of the plate.</li>
      </ul>
      <h2>One fix, done properly</h2>
      <p>Topped and stringed runner beans, sliced, steamed or blanched for 3–4 minutes until bright green and tender-crisp, finished with a little butter or salt. Bright, clean, crisp — nothing like the grey, stringy, squeaky beans of memory. The beans that were "stringy and watery" had the strings left in and were cooked too long. <strong>Both were method choices — and both are fixable.</strong></p>
    </div>

    <section class="related-links" aria-label="Related pages">
      <a href="/redeem/runner-beans">The runner beans redemption card</a>
      <a href="/guides/broad-beans-redemption">Broad beans chapter</a>
      <a href="/guides/peas-redemption">Peas chapter</a>
      <a href="/guides/leek-redemption">Leek chapter</a>
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