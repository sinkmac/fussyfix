export const adConfig = {
  client: 'ca-pub-REPLACE_WITH_FUSSYFIX_ADSENSE_CLIENT',
  enabledByDefault: true,
  disabledRoutes: new Set(['/guides/fussy-eating-or-arfid', '/medical-disclaimer'])
} as const;

export function adsEnabledForRoute(pathname: string) {
  return adConfig.enabledByDefault && !adConfig.disabledRoutes.has(pathname);
}
