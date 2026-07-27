<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables, methods } from '$lib/data';
  import { error } from '@sveltejs/kit';

  let { data } = $props();

  const meta = $derived(
    pageMeta({
      title: `${data.veg.name} — redeem it`,
      description: data.veg.childhoodFailureMode,
      path: `/redeem/${data.veg.id}`
    })
  );

  function bestMethod(methodId: string) {
    return methods.methods.find((m: { id: string }) => m.id === methodId);
  }
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" href={meta.canonical} />
  <meta property="og:title" content={meta.ogTitle} />
  <meta property="og:description" content={meta.ogDescription} />
  <meta property="og:url" content={meta.ogUrl} />
  <meta property="og:type" content="article" />
</svelte:head>

<section class="page-shell">
  <a href="/redeem" class="secondary-button" style="margin-bottom: 1rem;">← All vegetables</a>

  <div class="redemption-card">
    <div class="eyebrow">Redeem</div>
    <h1 style="font-size: 2rem; color: var(--brand-dark);">{data.veg.name}</h1>

    {#if data.veg.redemptionOneLiner && !data.veg.redemptionOneLiner.startsWith('TBD')}
      <p style="font-size: 1.1rem; font-style: italic; color: var(--text-muted);">
        {data.veg.redemptionOneLiner}
      </p>
    {/if}

    <div class="failure-mode">
      <div class="eyebrow" style="color: var(--accent);">How you remember it</div>
      <p style="margin: 0.5rem 0;">{data.veg.childhoodFailureMode}</p>
    </div>

    <p style="color: var(--brand-dark); font-weight: 700;">
      It was never the vegetable. It was the method.
    </p>

    {#if data.veg.causeAndFix}
      <div class="cause-and-fix" style="margin-top: 1rem; padding: 1rem; background: var(--surface-subtle, #f8f8f8); border-left: 3px solid var(--brand-dark, #333);">
        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text, #333);">{data.veg.causeAndFix}</p>
        {#if data.veg.thesisCaveat}
          <p style="margin: 0.75rem 0 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-muted, #666); font-style: italic;">{data.veg.thesisCaveat}</p>
        {/if}
      </div>
    {/if}

    {#each data.veg.redemptionMethods as methodId}
      {@const method = bestMethod(methodId)}
      {#if method}
        <div class="method-block">
          <div class="eyebrow" style="color: var(--brand-dark);">
            {#if methodId === data.veg.redemptionMethods[0]}
              Best method: {method.name}
            {:else}
              Also works: {method.name}
            {/if}
          </div>
          <p style="margin: 0.3rem 0;">{method.description}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.3rem 0;">
            Sensory outcome: {method.sensoryOutcome}
          </p>

          <div class="timing-block">
            {#each Object.entries((data.veg.timings as any)[methodId] || {}) as [route, timing]}
              <div class="route-item">
                <strong style="color: var(--text);">— {route}:</strong>
                {#if (timing as any).cookTime}
                  <span class="timing-duration">{(timing as any).cookTime}</span>
                {/if}
                {#if (timing as any).prepNote}
                  <span class="timing-note">{(timing as any).prepNote}</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}

    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
      <div class="eyebrow" style="color: var(--text-muted);">Texture profile</div>
      <p style="margin: 0.3rem 0;">{data.veg.textureProfile}</p>
      <div class="eyebrow" style="color: var(--text-muted); margin-top: 0.5rem;">UK seasonality</div>
      <p style="margin: 0.3rem 0;">{data.veg.ukSeasonality}</p>
    </div>

    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="/chart" class="secondary-button">Chart</a>
      <a href="/veg/{data.veg.id}" class="secondary-button">Chart history for {data.veg.name}</a>
    </div>
  </div>
</section>