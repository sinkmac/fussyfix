import { vegetables } from '$lib/data';
import { error } from '@sveltejs/kit';

export function entries() {
  return vegetables.vegetables.map((veg) => ({ id: veg.id }));
}

export function load({ params }) {
  const veg = vegetables.vegetables.find((v) => v.id === params.id);
  if (!veg) {
    throw error(404, 'Vegetable not found');
  }
  return { veg };
}