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
  const canonical = `${siteUrl}${path === '/' ? '' : path}`;

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