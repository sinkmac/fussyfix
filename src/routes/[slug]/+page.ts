import { editorialPages } from '$lib/content';
import { error } from '@sveltejs/kit';

export function entries() {
  return editorialPages.map((page) => ({ slug: page.slug }));
}

export function load({ params }) {
  const page = editorialPages.find((entry) => entry.slug === params.slug);

  if (!page) {
    throw error(404, 'Page not found');
  }

  return { page };
}
