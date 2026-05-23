<script lang="ts">
  import { onMount } from 'svelte';

  type ConsentChoice = 'accepted' | 'rejected';
  const storageKey = 'fussyfix_cookie_consent_v1';

  let visible = $state(false);

  onMount(() => {
    const saved = window.localStorage.getItem(storageKey);
    visible = saved !== 'accepted' && saved !== 'rejected';
  });

  function setConsent(choice: ConsentChoice) {
    window.localStorage.setItem(storageKey, choice);
    visible = false;
  }
</script>

{#if visible}
  <section class="cookie-banner" aria-label="Cookie consent">
    <div>
      <strong>Cookies and local storage</strong>
      <p>FussyFix uses essential local storage for your cookie choice. If analytics, advertising or affiliate measurement cookies are added, they only run where consent is required and given.</p>
    </div>
    <div class="cookie-actions">
      <button type="button" class="secondary-button" onclick={() => setConsent('rejected')}>Reject non-essential</button>
      <button type="button" class="primary-button" onclick={() => setConsent('accepted')}>Accept non-essential</button>
    </div>
  </section>
{/if}
