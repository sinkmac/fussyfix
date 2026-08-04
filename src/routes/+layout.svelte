<script lang="ts">
  import CookieConsent from '$lib/CookieConsent.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="site-header">
  <a href="/" class="brand">FussyFix</a>
  <nav>
    <a href="/redeem">Redeem a vegetable</a>
    <a href="/chart">Weekly chart</a>
    <a href="/books/fussy-eater-fix/">The Fussy Eater Fix</a>
    <a href="/about">About</a>
  </nav>
</header>

{@render children()}

<footer class="site-footer">
  <p>FussyFix — it was never the vegetable, it was the method.</p>
  <nav>
    <a href="/">Home</a>
    <a href="/redeem">Redeem a vegetable</a>
    <a href="/chart">Weekly chart</a>
    <a href="/about">About</a>
    <a href="/about/editorial-standards">Editorial standards</a>
    <a href="/books/fussy-eater-fix/">The Fussy Eater Fix</a>
    <a href="/privacy">Privacy</a>
    <a href="/cookies">Cookies</a>
    <a href="/terms">Terms</a>
    <a href="/contact">Contact</a>
  </nav>
</footer>

<CookieConsent />