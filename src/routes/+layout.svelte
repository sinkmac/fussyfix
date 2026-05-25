<script lang="ts">
  import CookieConsent from '$lib/CookieConsent.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="FussyFix | Free meal ideas for fussy eaters" />
  <meta property="og:description" content="Start with foods your child already accepts and generate low-pressure meal ideas. Not medical advice or ARFID diagnosis." />
  <meta property="og:url" content="https://fussyfix.co.uk" />
  <meta property="og:type" content="website" />
</svelte:head>

<header class="site-header">
  <a href="/" class="brand">FussyFix</a>
  <nav>
    <a href="/guides/fussy-eating-or-arfid">Fussy eating or ARFID</a>
    <a href="/guides/beige-food-phase">Beige food phase</a>
    <a href="/guides/safe-foods-fussy-eaters">Safe foods</a>
    <a href="/about">About</a>
    <a href="/medical-disclaimer">Medical disclaimer</a>
  </nav>
</header>

{@render children()}

<footer class="site-footer">
  <p>FussyFix</p>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/about/editorial-standards">Editorial standards</a>
    <a href="/medical-disclaimer">Medical disclaimer</a>
    <a href="/privacy">Privacy</a>
    <a href="/cookies">Cookies</a>
    <a href="/terms">Terms</a>
    <a href="/contact">Contact</a>
    <a href="/affiliate-disclosure">Affiliate disclosure</a>
  </nav>
</footer>

<CookieConsent />
