<script lang="ts">
  let { schema }: { schema: object | object[] } = $props();

  const schemaJson = $derived(JSON.stringify(schema).replace(/</g, '\u003c'));
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${schemaJson}</script>`}
</svelte:head>
