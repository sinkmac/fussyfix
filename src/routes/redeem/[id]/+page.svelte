<script lang="ts">
  import SchemaScript from '$lib/SchemaScript.svelte';
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables, methods } from '$lib/data';
  import { recipeSchema, faqSchema } from '$lib/editorial';
  import { error } from '@sveltejs/kit';

  let { data } = $props();

  // Vegetable → full eBook-style chapter guide, where published. This is the
  // standalone long-form content slot for the "Fussy Eater Fix" chapters.
  const chapterGuides: Record<string, string> = {
    potato: '/guides/potato-redemption',
    cauliflower: '/guides/cauliflower-redemption',
    carrot: '/guides/carrot-redemption',
    peas: '/guides/peas-redemption',
    spinach: '/guides/spinach-redemption'
  };
  const chapterPath = $derived(chapterGuides[data.veg.id]);

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

  // Structured data — Recipe for the crowned best method (redemptionMethods[0]),
  // FAQPage from the cause-and-fix block where one exists.
  const leadMethod = $derived(bestMethod(data.veg.redemptionMethods[0]));
  const leadTimings: Record<string, { cookTime: string | null; prepNote: string }> = $derived(
    (data.veg.timings as any)[data.veg.redemptionMethods[0]] || {}
  );
  const alternateMethods = $derived(
    data.veg.redemptionMethods.slice(1).map((id) => bestMethod(id)?.name).filter((n): n is string => Boolean(n))
  );
  const recipe = $derived(
    recipeSchema({
      name: `${data.veg.name} — ${leadMethod?.name ?? 'cooked'} method`,
      description: leadMethod?.description ?? '',
      path: `/redeem/${data.veg.id}`,
      steps: Object.entries(leadTimings).map(([route, t]) => ({
        name: route,
        text: [t.cookTime, t.prepNote].filter(Boolean).join(' — ')
      })),
      alternateMethods
    })
  );
  const faq = $derived(
    data.veg.causeAndFix && !data.veg.causeAndFix.startsWith('TBD')
      ? faqSchema([
          {
            question: `Why does ${data.veg.name.toLowerCase()} taste bad when boiled?`,
            answer: data.veg.causeAndFix
          }
        ])
      : null
  );
  const schemas = $derived([recipe, faq].filter(Boolean));
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
<SchemaScript schema={schemas} />

<section class="page-shell">
  <a href="/redeem" class="secondary-button" style="margin-bottom: 1rem;">← All vegetables</a>

  <div class="card freebie-optin" style="margin-bottom: 1.5rem; background: #f0f4e8; border: 1px solid var(--border);">
    <div class="eyebrow" style="color: var(--brand-dark);">The free fix</div>
    <h2 style="margin: 0.3rem 0; color: var(--brand-dark); font-size: 1.25rem;">Stuck on {data.veg.name}? Get all five fixes free.</h2>
    <p style="margin: 0 0 0.75rem; color: var(--text-muted); font-size: 0.95rem;">
      Five vegetables, five fixes — the ones most people have been served badly — in one short PDF. Same method-first approach as this page.
    </p>
    <!-- Freebie opt-in. Ships as a Netlify-registered form via the static detection file;
         the live SSR page posts here and _next routes to the thank-you/download page. -->
    <form name="fussy-eater-fix-freebie" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/freebie/netlify-v5.html" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 0;">
      <input type="hidden" name="form-name" value="fussy-eater-fix-freebie" />
      <input type="hidden" name="_next" value="/freebie/thank-you.html" />
      <div style="position:absolute; left:-5000px;" aria-hidden="true">
        <label>Don't fill this out if you're human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </div>
      <input type="email" name="email" required placeholder="you@example.com" aria-label="Email"
        style="flex:1; min-width:220px; padding:0.7rem 1rem; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:0.95rem;">
      <input type="submit" value="Get the free fixes" class="primary-button" style="border:0;">
    </form>
    <p style="margin: 0.6rem 0 0; font-size: 0.82rem; color: var(--text-muted);">Free PDF, delivered instantly. No email step, no upsells you didn't ask for.</p>
  </div>

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
      {#if chapterPath}
        <a href={chapterPath} class="primary-button">Read the full {data.veg.name} chapter</a>
      {/if}
      <a href="/chart" class="secondary-button">Chart</a>
      <a href="/veg/{data.veg.id}" class="secondary-button">Chart history for {data.veg.name}</a>
    </div>
  </div>
</section>