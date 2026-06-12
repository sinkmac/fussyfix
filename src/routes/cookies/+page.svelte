<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Cookie Policy',
    description: 'Cookie policy for FussyFix, including consent and rejection of non-essential cookies.',
    path: '/cookies'
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
    <div class="eyebrow">Cookies</div>
    <h1>Cookie Policy</h1>
    <div class="article-body">
      <p>FussyFix uses essential local storage to remember your cookie choice. The Safe Food Library currently does not store your entered safe foods after you leave the page.</p>
      <p>Non-essential cookies may include analytics, advertising or affiliate measurement cookies if those services are enabled. The banner allows new visitors to accept or reject non-essential cookies.</p>
      <p>Rejecting non-essential cookies does not stop the Safe Food Library working.</p>
      <p>You can remove your choice by clearing site data for fussyfix.co.uk in your browser settings.</p>
    </div>
  </article>
</section>
