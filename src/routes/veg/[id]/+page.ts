import { error } from '@sveltejs/kit';
import { vegetables } from '$lib/data';
import chartWeeks from '$lib/data/chart-weeks.json';

export function entries() {
  return vegetables.vegetables.map((veg) => ({ id: veg.id }));
}

export function load({ params }: { params: any }) {
  const veg = vegetables.vegetables.find((v) => v.id === params.id);
  if (!veg) {
    throw error(404, 'Vegetable not found');
  }

  const appearances: (any)[] = chartWeeks
    .map((week) => {
      const entry = week.entries.find((e) => e.vegetableId === params.id);
      if (!entry) return null;
      return { ...entry, week: week.week, published: week.published };
    })
    .filter(Boolean)
    .reverse();

  return { veg, appearances };
}