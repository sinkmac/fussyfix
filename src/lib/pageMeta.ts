import { siteMeta } from './content.ts';
import { siteUrl } from './editorial.ts';

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

export function pageMeta({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): PageMeta {
  const fullTitle = title.includes('FussyFix') ? title : `${title} | FussyFix`;
  const canonical = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    path,
    canonical,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: canonical
  };
}

export const fallbackMeta = pageMeta({
  title: siteMeta.title,
  description: siteMeta.ogDescription,
  path: '/'
});
