<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Editorial Standards and Sources',
    description: 'How FussyFix handles sources, factual claims and health-adjacent content.',
    path: '/about/editorial-standards'
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
    <div class="eyebrow">Editorial standards</div>
    <h1>How FussyFix handles sources</h1>
    <div class="article-body">
      <p>FussyFix is health-adjacent, not medical publishing. That means the writing has to be careful. Parents arrive worried. Some are dealing with ordinary developmental fussy eating. Some may be dealing with ARFID, anxiety, sensory feeding difficulties, growth concerns or family stress.</p>
      <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP.</div>
      <p>Where we make factual claims about health, nutrition, education support or eating difficulties, we cite recognised sources. Bodies referenced across the site include NHS, NICE, ARFID Awareness UK, BEAT, the Department for Education, IPSEA and SACN.</p>
      <p>Where we do not know something, we say so. Where a child may need clinical support, we say that too. FussyFix does not diagnose and does not pretend that a website can replace a GP, health visitor, paediatric dietitian or specialist service.</p>
      <ul>
        <li>NHS and NHS Healthier Families for general child health and nutrition information.</li>
        <li>NICE for eating disorder recognition and treatment guidance.</li>
        <li>ARFID Awareness UK and BEAT for ARFID information and parent support signposting.</li>
        <li>DfE, Equality Act guidance and IPSEA for school, reasonable adjustment and SEND context.</li>
        <li>SACN for nutrition reports and dietary public-health context.</li>
      </ul>
    </div>
  </article>
</section>
