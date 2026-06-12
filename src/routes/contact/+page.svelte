<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Contact',
    description: 'Contact FussyFix with questions about the site.',
    path: '/contact'
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
    <div class="eyebrow">Contact</div>
    <h1>Contact FussyFix</h1>
    <div class="article-body">
      <p>FussyFix is run by Sinclair McLay from Kirriemuir, Scotland.</p>
      <p>Email: <a href="mailto:sinclair.mclay@gmail.com">sinclair.mclay@gmail.com</a></p>
      <p>I aim to respond within 5 working days. I cannot give medical, clinical, dietetic, emergency or safeguarding advice by email. If you are worried about your child’s health, speak to your GP, NHS 111, health visitor, school nurse or local urgent care route as appropriate.</p>
    </div>
  </article>
</section>
