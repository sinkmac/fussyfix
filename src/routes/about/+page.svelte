<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'About',
    description: 'Who is behind FussyFix, why it exists, and what it does and does not do.',
    path: '/about'
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
    <div class="eyebrow">About</div>
    <h1>FussyFix is for tired parents who have heard enough surface-level advice.</h1>
    <div class="article-body">
      <p>FussyFix is run by Sinclair McLay, based in Kirriemuir, Scotland.</p>
      <p>It exists because parents of fussy eaters are an underserved audience. Too often they are given advice that sounds neat from the outside and collapses at the table: keep trying, hide vegetables, make one family meal, they will eat when hungry. Many families have already tried the obvious things. They need calmer tools.</p>
      <p>The Safe Food Library starts from the foods your child already trusts. It helps you think about meals and small next steps without turning dinner into a fight.</p>
      <p>FussyFix is run by a parent and writer, not a clinician. It is not a diagnosis tool. It is not a substitute for clinical advice, a GP appointment, a health visitor, a paediatric dietitian, an occupational therapist, or an eating disorder service.</p>
      <p>Every page that discusses ARFID says clearly that the information is not a diagnosis. If you are worried about your child’s eating, speak to your GP.</p>
      <div class="disclaimer-box"><strong>This is information, not a diagnosis.</strong> If you're concerned about your child's eating, speak to your GP.</div>
      <p><a class="primary-button" href="/">Build your child's Safe Food Library — it's free.</a></p>
    </div>
  </article>
</section>
