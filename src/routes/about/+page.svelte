<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'About',
    description: 'FussyFix is a vegetable-redemption site. It was never the vegetable, it was the method.',
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

<section class="page-shell">
  <div class="card">
    <div class="eyebrow">About</div>
    <h1>It was never the vegetable. It was the method.</h1>
    <div class="article-body">
      <p>FussyFix is a vegetable-redemption publication. It exists because most people who think they hate a vegetable have only ever had it boiled.</p>
      <p>Boiling is not the only way to cook a vegetable. It is not even a good way. But it is the way most of us first encountered broccoli, cauliflower, cabbage, sprouts, and every other vegetable that arrived on a school dinner plate as a grey-green obligation.</p>
      <p>FussyFix replaces the childhood failure mode with a method that works. Eight methods — gentle-heat, char, roast, blister, crisp, pickle, raw-thin, slow-braise — each matched to the vegetables that respond to them. Appliance-agnostic. All ages. No guilt, no mocking.</p>
      <p>FussyFix is run by Sinclair McLay, based in Kirriemuir, Scotland. It is part of the AI Scotland Productions portfolio.</p>
      <p><a href="/redeem" class="primary-button">Find your redemption method</a></p>
    </div>
  </div>
</section>