import { error } from '@sveltejs/kit';
import chartWeeks from '$lib/data/chart-weeks.json';

export function load() {
  if (!chartWeeks || chartWeeks.length === 0) {
    throw error(404, 'No chart data');
  }

  // Use the most recent archived week as the current week
  // (the cron job generates and appends new weeks)
  const currentWeek = chartWeeks[chartWeeks.length - 1];
  const archiveWeeks = chartWeeks.slice(0, -1).reverse();

  return { week: currentWeek, archiveWeeks };
}