import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { pageMeta } from '../src/lib/pageMeta.ts';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const routeRoot = path.join(repoRoot, 'src', 'routes');

const guideRoutes = [
  '/guides/beige-food-phase',
  '/guides/fussy-eating-family-stress',
  '/guides/fussy-eating-or-arfid',
  '/guides/mealtime-survival-scripts',
  '/guides/nutrients-fussy-eater-uk',
  '/guides/recipes-fussy-eaters-uk',
  '/guides/safe-foods-fussy-eaters',
  '/guides/school-fussy-eater-uk'
];

describe('page metadata helper', () => {
  it('derives Open Graph fields from the same title, description, and canonical path', () => {
    const meta = pageMeta({
      title: "Is This Fussy Eating or ARFID? A Parent's Honest Guide",
      description: 'A careful parent guide to the difference between developmental fussy eating and ARFID.',
      path: '/guides/fussy-eating-or-arfid'
    });

    assert.equal(meta.title, "Is This Fussy Eating or ARFID? A Parent's Honest Guide | FussyFix");
    assert.equal(meta.ogTitle, meta.title);
    assert.equal(meta.ogDescription, meta.description);
    assert.equal(meta.ogUrl, meta.canonical);
    assert.equal(meta.canonical, 'https://fussyfix.co.uk/guides/fussy-eating-or-arfid');
  });
});

describe('route head source', () => {
  it('does not hardcode homepage Open Graph tags in the root layout', () => {
    const layout = readFileSync(path.join(routeRoot, '+layout.svelte'), 'utf8');

    assert.doesNotMatch(layout, /property="og:title"/);
    assert.doesNotMatch(layout, /property="og:description"/);
    assert.doesNotMatch(layout, /property="og:url"/);
  });

  it('sets per-route Open Graph fields on every guide route', () => {
    for (const route of guideRoutes) {
      const source = readFileSync(path.join(routeRoot, route, '+page.svelte'), 'utf8');

      assert.match(source, /const meta = pageMeta\(\{ title, description, path \}\);/, `${route} should build meta from its own title/description/path constants`);
      assert.match(source, /<title>\{meta\.title\}<\/title>/, `${route} should render meta.title`);
      assert.match(source, /<meta property="og:title" content=\{meta\.ogTitle\} \/>/, `${route} should render per-page og:title`);
      assert.match(source, /<meta property="og:description" content=\{meta\.ogDescription\} \/>/, `${route} should render per-page og:description`);
      assert.match(source, /<meta property="og:url" content=\{meta\.ogUrl\} \/>/, `${route} should render per-page og:url`);
    }
  });
});
