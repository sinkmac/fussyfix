export const siteUrl = 'https://fussyfix.co.uk';

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}