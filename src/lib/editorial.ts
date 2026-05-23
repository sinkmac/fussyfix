export const publishedDate = '2026-05-23';
export const updatedDate = '2026-05-23';
export const authorName = 'Sinclair McLay';
export const siteUrl = 'https://fussyfix.co.uk';

export type SourceLink = {
  label: string;
  url: string;
};

export function articleSchema({
  title,
  description,
  path,
  datePublished = publishedDate,
  dateModified = updatedDate
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'FussyFix',
      url: siteUrl
    },
    datePublished,
    dateModified,
    mainEntityOfPage: `${siteUrl}${path}`
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export const commonSources = {
  nhsHealthierFamilies: { label: 'NHS Healthier Families: food facts', url: 'https://www.nhs.uk/healthier-families/food-facts/' },
  nhsEatwell: { label: 'NHS: The Eatwell Guide', url: 'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/' },
  nhsChildWeight: { label: 'NHS: children’s weight and diet advice', url: 'https://www.nhs.uk/live-well/healthy-weight/childrens-weight/' },
  niceEatingDisorders: { label: 'NICE guideline NG69: eating disorders recognition and treatment', url: 'https://www.nice.org.uk/guidance/ng69' },
  beatArfid: { label: 'BEAT: ARFID', url: 'https://www.beateatingdisorders.org.uk/get-information-and-support/about-eating-disorders/types/arfid/' },
  beatHelplines: { label: 'BEAT: helplines', url: 'https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/i-need-support-now/helplines/' },
  arfidAwareness: { label: 'ARFID Awareness UK', url: 'https://www.arfidawarenessuk.org/' },
  dfeSchoolFood: { label: 'Department for Education: school food standards', url: 'https://www.gov.uk/government/publications/school-food-standards-resources-for-schools' },
  equalityAct: { label: 'Equality Act 2010 guidance', url: 'https://www.gov.uk/guidance/equality-act-2010-guidance' },
  ipseaEhcp: { label: 'IPSEA: education, health and care plans', url: 'https://www.ipsea.org.uk/ehc-plans' },
  sacn: { label: 'Scientific Advisory Committee on Nutrition reports', url: 'https://www.gov.uk/government/groups/scientific-advisory-committee-on-nutrition' }
} satisfies Record<string, SourceLink>;

export const arfidDisclaimer = "This is information, not a diagnosis. If you're concerned about your child's eating, speak to your GP.";

export const toolCta = "Build your child's Safe Food Library — it's free.";
