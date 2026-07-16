import { error } from '@sveltejs/kit';
import chartWeeks from '$lib/data/chart-weeks.json';

export function load({ params }: { params: any }) {
  const week = chartWeeks.find((w) => w.week === params.id);
  if (!week) {
    throw error(404, 'Chart week not found');
  }
  return { week };
}