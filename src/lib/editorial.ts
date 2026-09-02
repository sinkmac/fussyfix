export const siteUrl = 'https://fussyfix.co.uk';

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

export const toolCta = 'Start with a vegetable →';

export const arfidDisclaimer = 'This information is not a diagnosis. If you are concerned about your child\'s eating, speak to your GP.';

interface SourceLink {
  url: string;
  label: string;
}

export const commonSources: Record<string, SourceLink> = {
  nhsEatwell: {
    url: 'https://www.nhs.uk/live-well/eat-well/',
    label: 'NHS Eatwell Guide'
  },
  nhsHealthierFamilies: {
    url: 'https://www.nhs.uk/healthier-families/',
    label: 'NHS Healthier Families'
  },
  nhsChildWeight: {
    url: 'https://www.nhs.uk/baby-birth-and-beyond/',
    label: 'NHS Child Weight and Growth'
  },
  sacn: {
    url: 'https://www.gov.uk/government/groups/scientific-advisory-committee-on-nutrition',
    label: 'SACN — Scientific Advisory Committee on Nutrition'
  },
  arfidAwareness: {
    url: 'https://www.arfidawarenessuk.org/',
    label: 'ARFID Awareness UK'
  },
  beatArfid: {
    url: 'https://www.beateatingdisorders.org.uk/types/arfid/',
    label: 'BEAT — ARFID information'
  },
  beatHelplines: {
    url: 'https://www.beateatingdisorders.org.uk/support-services/helplines/',
    label: 'BEAT Helplines'
  },
  niceEatingDisorders: {
    url: 'https://www.nice.org.uk/guidance/ng69',
    label: 'NICE guideline NG69 — Eating Disorders'
  },
  dfeSchoolFood: {
    url: 'https://www.gov.uk/government/publications/school-food-standards-resources-for-schools',
    label: 'DfE School Food Standards'
  },
  equalityAct: {
    url: 'https://www.gov.uk/guidance/equality-act-2010-guidance',
    label: 'Equality Act 2010 — Guidance'
  },
  ipseaEhcp: {
    url: 'https://www.ipsea.org.uk/',
    label: 'IPSEA — SEND and EHCP advice'
  }
};

interface SchemaOrg {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  url: string;
}

export function articleSchema({ title, description, path }: { title: string; description: string; path: string }): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path)
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export function faqSchema(faqs: FaqItem[]): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

interface RecipeStep {
  name: string;
  text: string;
}

interface RecipeSchema {
  '@context': 'https://schema.org';
  '@type': 'Recipe';
  name: string;
  description: string;
  url: string;
  recipeCategory: string;
  recipeCuisine: string;
  recipeInstructions: RecipeStep[];
  recipeNotes?: string;
  keywords?: string;
  image?: string | string[];
}

interface RecipeSchemaInput {
  name: string;
  description: string;
  path: string;
  steps: RecipeStep[];
  alternateMethods: string[];
  keywords?: string;
  /**
   * Image URL(s) for the Recipe. Google requires at least one image for
   * rich results; multiple aspect ratios (1:1, 4:3, 16:9) are ideal.
   * Optional — omitted from output when no image exists yet, so the
   * schema never ships a dead or fabricated URL.
   */
  image?: string | string[];
}

/**
 * Recipe schema for a /redeem/[id] page. Built from the veg's crowned best
 * method (redemptionMethods[0]): one HowToStep per delivery route with its
 * cook time, alternates listed in recipeNotes. No ingredients/images emitted
 * because the data model doesn't carry them — this is method-level markup,
 * not a full recipe card.
 */
export function recipeSchema({ name, description, path, steps, alternateMethods, keywords, image }: RecipeSchemaInput): RecipeSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name,
    description,
    url: absoluteUrl(path),
    recipeCategory: 'Vegetable dish',
    recipeCuisine: 'British',
    recipeInstructions: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text
    })),
    ...(keywords ? { keywords } : {}),
    ...(image ? { image } : {}),
    ...(alternateMethods.length > 0
      ? { recipeNotes: `Also works: ${alternateMethods.join(', ')}.` }
      : {})
  };
}

/**
 * Recipe image URL for a /redeem/[id] page. Dormant until real image assets
 * are committed: returns null when the veg has no image, and callers must
 * not emit an image field for null — the schema never ships a dead or
 * fabricated URL.
 *
 * When images land: drop them in src/lib/assets/veg/ as
 *   <vegId>.jpg                 (primary, ≥1200px wide)
 *   <vegId>-1x1.jpg / -4x3.jpg / -16x9.jpg   (optional aspect variants)
 * This resolves them to Vite-bundled absolute URLs automatically.
 */
const vegImageModules: Record<string, string> = import.meta.glob<string>(
  '../assets/veg/*.jpg',
  { eager: true, query: '?url', import: 'default' }
);

const vegImageBase: Record<string, string[]> = {};
for (const [file, url] of Object.entries(vegImageModules)) {
  const stem = file.split('/').pop()!.replace(/\.jpg$/, '');
  const [id, variant] = stem.match(/^(.*?)(-1x1|-4x3|-16x9)?$/)!.slice(1).filter(Boolean) as [string, string?];
  (vegImageBase[id] ??= []).push(...(variant ? [] : [url]));
}
// Ordered 1:1, 4:3, 16:9 when all variants exist, else just the primary.
const vegImageVariants: Record<string, string[]> = {};
for (const [file, url] of Object.entries(vegImageModules)) {
  const stem = file.split('/').pop()!.replace(/\.jpg$/, '');
  const m = stem.match(/^(.*?)(-1x1|-4x3|-16x9)$/);
  if (m) (vegImageVariants[m[1]] ??= []).push(url);
}

export function recipeImage(vegId: string): string | string[] | null {
  const primary = vegImageBase[vegId];
  if (!primary) return null;
  const variants = vegImageVariants[vegId];
  return variants && variants.length > 0 ? [primary[0], ...variants] : primary[0];
}