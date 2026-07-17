<script lang="ts">
  import { pageMeta } from '$lib/pageMeta';
  import { vegetables } from '$lib/data';
  import seasonalityData from '$lib/data/seasonality.json';

  let { data } = $props();

  const meta = $derived(
    pageMeta({
      title: 'Weekly chart — FussyFix',
      description: 'Computed weekly from UK seasonality. See which vegetables are at their peak right now.',
      path: '/chart'
    })
  );

  const currentWeek = $derived(data.week);

  function getVegName(id: string): string {
    return vegetables.vegetables.find((v) => v.id === id)?.name ?? id;
  }

  function getSeasonType(id: string): string {
    const v = seasonalityData.find((s: any) => s.id === id);
    if (!v) return '';
    if (v.type === 'import_year_round') return 'import';
    if (v.type === 'year_round') return 'year-round';
    return '';
  }

  function movementClass(entry: typeof currentWeek.entries[0]): string {
    if (entry.badge === 'new' || entry.badge === 're-entry') return '';
    if (entry.lastWeek === null) return '';
    const diff = entry.lastWeek - entry.position;
    if (diff > 0) return 'up';
    if (diff < 0) return 'down';
    return '';
  }

  function movementText(entry: typeof currentWeek.entries[0]): string {
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
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div class="eyebrow">Weekly chart</div>
      <h1 style="font-size: 1.8rem; margin: 0.3rem 0;">Week {currentWeek.week}</h1>
      <p style="color: var(--text-muted);">Published {currentWeek.published}</p>
    </div>
    <div class="provenance-label">
      <span>📊</span> Computed weekly from UK seasonality · <a href="/about/editorial-standards#chart-methodology" style="color: var(--text-muted);">how this works</a>
    </div>
  </div>

  <div class="card" style="margin-top: 1rem; overflow-x: auto;">
    <table class="chart-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Vegetable</th>
          <th>Movement</th>
          <th>Weeks</th>
          <th>Peak</th>
          <th>Season</th>
        </tr>
      </thead>
      <tbody>
        {#each currentWeek.entries as entry}
          <tr>
            <td class="position">{entry.position}</td>
            <td>
              <a href="/redeem/{entry.vegetableId}" style="font-weight: 700; text-decoration: none;">
                {getVegName(entry.vegetableId)}
              </a>
              {#if entry.badge}
                <span class="badge badge--{entry.badge}" style="margin-left: 0.5rem;">
                  {entry.badge === 'new' ? 'New' : entry.badge === 're-entry' ? 'Re-entry' : entry.badge === 'climber' ? 'Climber' : 'Steady'}
                </span>
              {/if}
            </td>
            <td class="movement">
              <span class={movementClass(entry)}>{movementText(entry)}</span>
            </td>
            <td>{entry.weeksOnChart}</td>
            <td>{entry.peak}</td>
            <td style="color: var(--text-muted); font-size: 0.85rem;">
              {#if getSeasonType(entry.vegetableId)}
                <span class="badge badge--non-mover">{getSeasonType(entry.vegetableId)}</span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
    <a href="/redeem" class="secondary-button">Redeem a vegetable</a>
    {#if data.archiveWeeks.length > 0}
      <a href="/chart/{data.archiveWeeks[0].week}" class="secondary-button">Previous week →</a>
    {/if}
  </div>
</section>