<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';

  const meta = pageMeta({
    title: 'Privacy Policy',
    description: 'Privacy policy for FussyFix, including tool storage, AdSense cookies, analytics and affiliate tracking.',
    path: '/privacy'
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
    <div class="eyebrow">Privacy</div>
    <h1>Privacy Policy</h1>
    <div class="article-body">
      <p>FussyFix is operated by Sinclair McLay in the UK. The Safe Food Library / meal idea tool does not require an account and does not send your entered foods to a FussyFix server. Current tool input is held in the browser while you use the page and is not stored by FussyFix.</p>
      <p>The cookie consent choice is stored in your browser using localStorage so the banner does not keep appearing after you choose. You can clear this through your browser settings.</p>
      <p>If analytics are present, they are used to understand which pages are being used and to improve the site. Analytics cookies or similar non-essential storage will only run where consent is required and granted.</p>
      <p>Google AdSense and third-party vendors, including Google, may use cookies to serve ads based on a user’s prior visits to this website or other websites. Google’s use of advertising cookies enables it and its partners to serve ads based on visits to this site and/or other sites on the internet. Users may opt out of personalised advertising by visiting Google Ads Settings.</p>
      <p>Third-party vendors and ad networks may serve ads on this site. You can visit those vendors’ websites to opt out of cookies for personalised advertising where available.</p>
      <p>Affiliate links may use tracking so a retailer or network can credit a commission. Affiliate links are restricted to recipes and nutrition pages. They do not appear on clinical, mealtime survival, family stress, medical disclaimer or compliance pages.</p>
      <p>Our UK GDPR/ICO basis for essential site storage is legitimate interests: operating a functional website and remembering your cookie choice. For non-essential advertising or analytics cookies, we ask for consent where required.</p>
      <p>Contact: <a href="mailto:sinclair.mclay@gmail.com">sinclair.mclay@gmail.com</a>.</p>
    </div>
  </article>
</section>
