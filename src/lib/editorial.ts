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
  recipeInstructions: RecipeStep[];
  recipeNotes?: string;
}

interface RecipeSchemaInput {
  name: string;
  description: string;
  path: string;
  steps: RecipeStep[];
  alternateMethods: string[];
}

/**
 * Recipe schema for a /redeem/[id] page. Built from the veg's crowned best
 * method (redemptionMethods[0]): one HowToStep per delivery route with its
 * cook time, alternates listed in recipeNotes. No ingredients/images emitted
 * because the data model doesn't carry them — this is method-level markup,
 * not a full recipe card.
 */
export function recipeSchema({ name, description, path, steps, alternateMethods }: RecipeSchemaInput): RecipeSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name,
    description,
    url: absoluteUrl(path),
    recipeCategory: 'Vegetable dish',
    recipeInstructions: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text
    })),
    ...(alternateMethods.length > 0
      ? { recipeNotes: `Also works: ${alternateMethods.join(', ')}.` }
      : {})
  };
}