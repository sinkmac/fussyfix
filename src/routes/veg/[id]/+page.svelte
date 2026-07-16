<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables } from '$lib/data';

  let { data } = $props();

  const meta = $derived(
    pageMeta({
      title: `${data.veg.name} — chart history`,
      description: `See how ${data.veg.name} has performed on the FussyFix redemption chart.`,
      path: `/veg/${data.veg.id}`
    })
  );

  function movementText(entry: typeof data.appearances[0]): string {
    if (entry.badge === 'new') return 'NEW';
    if (entry.badge === 're-entry') return 'RE';
    if (entry.lastWeek === null) return '—';
    const diff = entry.lastWeek - entry.position;
    if (diff > 0) return `↑${diff}`;
    if (diff < 0) return `↓${Math.abs(diff)}`;
    return '—';
  }
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
  <a href="/chart" class="secondary-button" style="margin-bottom: 1rem;">← Chart</a>

  <div class="eyebrow">Chart history</div>
  <h1 style="font-size: 1.8rem;">{data.veg.name}</h1>

  {#if data.veg.redemptionOneLiner && !data.veg.redemptionOneLiner.startsWith('TBD')}
    <p style="font-style: italic; color: var(--text-muted);">{data.veg.redemptionOneLiner}</p>
  {/if}

  <div class="card" style="margin-top: 1rem;">
    {#if data.appearances.length === 0}
      <p style="color: var(--text-muted);">No chart appearances yet. The chart launched this week.</p>
    {:else}
      <table class="chart-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Position</th>
            <th>Movement</th>
            <th>Peak</th>
          </tr>
        </thead>
        <tbody>
          {#each data.appearances as appearance}
            <tr>
              <td><a href="/chart/{appearance.week}">{appearance.week}</a></td>
              <td class="position">{appearance.position}</td>
              <td class="movement"><span>{movementText(appearance)}</span></td>
              <td>{appearance.peak}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>

  <div style="margin-top: 1rem;">
    <a href="/redeem/{data.veg.id}" class="primary-button">Redeem {data.veg.name}</a>
  </div>
</section>