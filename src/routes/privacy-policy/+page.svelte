<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Privacy Policy',
    description: 'Privacy policy for FussyFix, including how the site handles meal generator input and analytics.',
    path: '/privacy-policy'
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
    <div class="eyebrow">Policy</div>
    <h1>Privacy Policy</h1>
    <div class="article-body">
      <p>
        FussyFix is a lightweight meal idea tool. We do not ask users to create accounts and we do not collect personal profile data through the generator itself.
      </p>
      <p>
        If analytics are enabled, they are used only to understand which pages are being used and to improve the site. We do not sell personal data.
      </p>
      <p>
        If contact or advertising tools are added later, this policy will be updated to reflect that clearly.
      </p>
    </div>
  </article>
</section>
