import { error } from '@sveltejs/kit';

// This route was part of the old ARFID/fussy-eating content.
// The content has been removed. All slugs return 404.
export function entries() {
  return [];
}

export function load() {
  throw error(404, 'Page not found');
}