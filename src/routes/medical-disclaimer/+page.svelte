<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Medical Disclaimer',
    description: 'Medical disclaimer for FussyFix, including GP, ARFID, BEAT and urgent safeguarding signposting.',
    path: '/medical-disclaimer'
  });
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

<section class="article-shell">
  <article class="article-card">
    <div class="eyebrow">Medical disclaimer</div>
    <h1>This is information, not medical advice</h1>
    <div class="article-body">
      <p>FussyFix provides general information and practical tools for parents. It is not medical advice, clinical advice, nutritional treatment, a diagnosis tool, or a substitute for professional support.</p>
      <p>If you are concerned about your child’s eating, speak to your GP. You can ask about growth, hydration, constipation, fatigue, anxiety around food, restricted food range, possible ARFID, and referral to a paediatric dietitian or relevant feeding/eating-disorder service.</p>
      <p>If your child is losing weight, becoming dehydrated, fainting, showing severe distress around food, or their eating is rapidly reducing, contact your GP this week. If the situation feels acute, call NHS 111 or go to A&E.</p>
      <p>Helpful support routes include ARFID Awareness UK, BEAT, NHS information, your GP, health visitor, school nurse and paediatric dietitian services where available.</p>
      <p><a href="https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/i-need-support-now/helplines/">BEAT helplines</a> and <a href="https://www.arfidawarenessuk.org/">ARFID Awareness UK</a> can help parents find language and support. They do not replace urgent medical care.</p>
      <p><a class="primary-button" href="/guides/fussy-eating-or-arfid">Read the ARFID guide</a></p>
    </div>
  </article>
</section>
