<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="site-header">
  <a href="/" class="brand">FussyFix</a>
  <nav>
    <a href="/why-is-my-child-a-fussy-eater">Why fussy eating happens</a>
    <a href="/foods-fussy-eaters-accept">Foods they accept</a>
    <a href="/how-to-get-fussy-eater-to-try-new-foods">Trying new foods</a>
    <a href="/meal-planning-fussy-eaters">Meal planning</a>
    <a href="/nutrition-for-fussy-eaters">Nutrition wins</a>
    <a href="/privacy-policy">Privacy</a>
  </nav>
</header>

{@render children()}

<footer class="site-footer">
  <p>FussyFix</p>
  <nav>
    <a href="/">Home</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/why-is-my-child-a-fussy-eater">Why is my child such a fussy eater?</a>
  </nav>
</footer>
