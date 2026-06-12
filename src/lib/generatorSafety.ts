export type AgeBand = '1–2 years' | '3–5 years' | '6–8 years' | '9–12 years';

export type MealIdea = {
  title: string;
  body: string;
  optionalVariation?: string;
};

export type SafetyIssue = {
  code: string;
  message: string;
};

export type GenerationResult =
  | { status: 'ok'; ideas: MealIdea[]; sideNote?: string }
  | { status: 'screened'; message: string }
  | { status: 'error'; message: string };

export const ageBands: AgeBand[] = ['1–2 years', '3–5 years', '6–8 years', '9–12 years'];

export const emergencyResponse =
  "I'm sorry things feel this worrying. This meal ideas tool is not the right next step for urgent eating concerns. Please contact your GP, call NHS 111 if you're worried it may be urgent, or use BEAT's helplines for eating-difficulty support. If your child seems very unwell, seek urgent medical help.";

export const smallListSideNote =
  'When the safe-food list is very short, it can help to keep notes on what is accepted, what is refused, hydration, energy and distress so a GP conversation is easier if you decide to seek support.';

export const genericErrorMessage = "Sorry — FussyFix couldn't generate safe ideas this time. Please try again later.";

export type SourceConstraint = {
  code: string;
  source: string;
  sourceUrl: string;
  note: string;
  terms: string[];
  ageBands: AgeBand[];
};

export const sourceConstraints: SourceConstraint[] = [
  {
    code: 'whole-nuts-popcorn-under-5',
    source: 'NHS Best Start in Life: Preparing food safely for babies',
    sourceUrl: 'https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/',
    note: 'NHS says not to give whole nuts or popcorn to children under 5 years old.',
    terms: ['whole nut', 'whole nuts', 'peanut', 'peanuts', 'popcorn'],
    ageBands: ['1–2 years', '3–5 years']
  },
  {
    code: 'round-fruit-quartering-young-children',
    source: 'NHS Best Start in Life: Preparing food safely for babies',
    sourceUrl: 'https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/',
    note: 'NHS says small round fruits such as grapes, cherries, berries, strawberries and cherry tomatoes should be cut into quarters.',
    terms: ['whole grape', 'whole grapes', 'grape', 'grapes', 'cherry tomato', 'cherry tomatoes', 'cherries'],
    ageBands: ['1–2 years', '3–5 years']
  },
  {
    code: 'firm-fruit-prep-youngest',
    source: 'NHS Best Start in Life: Preparing food safely for babies',
    sourceUrl: 'https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/',
    note: 'NHS says firm fruits should be sliced, grated, mashed, steamed or simmered for very young children, and hard pips or stones should be removed.',
    terms: ['chunks of apple', 'apple chunks', 'hard apple', 'raw carrot chunks', 'hard carrot', 'pips', 'stones'],
    ageBands: ['1–2 years']
  },
  {
    code: 'sausages-hot-dogs-prep-young-children',
    source: 'NHS Best Start in Life: Preparing food safely for babies',
    sourceUrl: 'https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/preparing-food-safely/',
    note: 'NHS says sausages and hot dogs should be cut into short strips, halved lengthways or cut as thinly as possible; peeling the skin makes them easier to swallow.',
    terms: ['whole sausage', 'whole sausages', 'sausage rounds', 'hot dog rounds', 'whole hot dog', 'whole hot dogs'],
    ageBands: ['1–2 years', '3–5 years']
  },
  {
    code: 'honey-under-1',
    source: 'NHS: Foods to avoid giving babies and young children',
    sourceUrl: 'https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/',
    note: 'NHS says not to give honey until a child is over 1 year old.',
    terms: ['honey'],
    ageBands: ['1–2 years']
  }
];

const commonAllergens = [
  'milk',
  'cheese',
  'yoghurt',
  'yogurt',
  'egg',
  'eggs',
  'peanut',
  'peanuts',
  'almond',
  'cashew',
  'sesame',
  'fish',
  'shellfish',
  'prawn',
  'wheat',
  'soya',
  'soy'
];

const clinicalClaimPatterns = [
  /weight gain/i,
  /gain weight/i,
  /help(?:s)? (?:them|him|her|your child) grow/i,
  /growth/i,
  /reduce anxiety/i,
  /fix(?:es|ing)? (?:eating|fussy|arfid)/i,
  /cure/i,
  /treat(?:s|ment)?/i
];

const acuteConcernPatterns = [
  /barely (?:eaten|ate|drunk|drank)/i,
  /not (?:eaten|eating|drinking|drunk|had water)/i,
  /won't (?:eat|drink)/i,
  /hasn'?t (?:eaten|drunk|had anything)/i,
  /refus(?:e|ing|al).{0,40}(?:eat|drink|food|water)/i,
  /(?:three|3|two|2) days/i,
  /dehydrat/i,
  /weight loss|losing weight/i,
  /vomit/i,
  /faint|dizzy/i,
  /severe distress|panic|screaming/i,
  /make (?:him|her|them) eat/i,
  /force (?:him|her|them)/i
];

function normalise(value: string) {
  return value.toLowerCase().replace(/[’']/g, "'");
}

export function parseSafeFoods(input: string) {
  return input
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 20);
}

export function screenInput(input: string) {
  try {
    return acuteConcernPatterns.some((pattern) => pattern.test(input));
  } catch {
    return true;
  }
}

export function validateAgeSafety(idea: MealIdea, ageBand: AgeBand): SafetyIssue[] {
  const text = normalise([idea.title, idea.body, idea.optionalVariation].filter(Boolean).join(' '));

  return sourceConstraints
    .filter((constraint) => constraint.ageBands.includes(ageBand))
    .filter((constraint) => constraint.terms.some((term) => text.includes(term)))
    .map((constraint) => ({ code: constraint.code, message: constraint.note }));
}

export function validateSafeFoodZone(idea: MealIdea, safeFoods: string[]): SafetyIssue[] {
  const text = normalise(`${idea.title} ${idea.body}`);
  const normalisedFoods = safeFoods.map(normalise);
  const mentionsSafeFood = normalisedFoods.some((food) => text.includes(food));

  if (!mentionsSafeFood) {
    return [{ code: 'safe-food-zone', message: 'Idea does not clearly build from an entered safe food.' }];
  }

  return [];
}

export function validateAllergenDiscipline(idea: MealIdea, safeFoods: string[]): SafetyIssue[] {
  const text = normalise(`${idea.title} ${idea.body} ${idea.optionalVariation ?? ''}`);
  const safe = safeFoods.map(normalise);
  const introducedAllergens = commonAllergens.filter((allergen) => text.includes(allergen) && !safe.some((food) => food.includes(allergen)));

  if (introducedAllergens.length > 0) {
    return [{ code: 'allergen-expansion', message: `Idea introduces allergen terms not entered as safe foods: ${introducedAllergens.join(', ')}` }];
  }

  return [];
}

export function validateTherapeuticClaims(idea: MealIdea): SafetyIssue[] {
  const text = `${idea.title} ${idea.body} ${idea.optionalVariation ?? ''}`;
  if (clinicalClaimPatterns.some((pattern) => pattern.test(text))) {
    return [{ code: 'therapeutic-claim', message: 'Idea makes or implies a clinical/therapeutic outcome claim.' }];
  }
  return [];
}

export function validateIdea(idea: MealIdea, safeFoods: string[], ageBand: AgeBand): SafetyIssue[] {
  return [
    ...validateSafeFoodZone(idea, safeFoods),
    ...validateAgeSafety(idea, ageBand),
    ...validateAllergenDiscipline(idea, safeFoods),
    ...validateTherapeuticClaims(idea)
  ];
}

export function postProcessIdeas(rawIdeas: unknown, safeFoods: string[], ageBand: AgeBand): GenerationResult {
  if (!Array.isArray(rawIdeas) || rawIdeas.length === 0) {
    return { status: 'error', message: genericErrorMessage };
  }

  const ideas: MealIdea[] = [];

  for (const raw of rawIdeas) {
    if (!raw || typeof raw !== 'object') continue;
    const item = raw as Record<string, unknown>;
    if (typeof item.title !== 'string' || typeof item.body !== 'string') continue;
    const idea: MealIdea = {
      title: item.title,
      body: item.body
    };
    if (typeof item.optionalVariation === 'string') {
      idea.optionalVariation = item.optionalVariation;
    }
    ideas.push(idea);
  }

  if (ideas.length === 0) {
    return { status: 'error', message: genericErrorMessage };
  }

  const issues = ideas.flatMap((idea) => validateIdea(idea, safeFoods, ageBand));
  if (issues.length > 0) {
    return { status: 'error', message: genericErrorMessage };
  }

  return { status: 'ok', ideas };
}

export function buildFallbackIdeas(safeFoods: string[], ageBand: AgeBand): MealIdea[] {
  return Array.from({ length: 5 }, (_, index) => {
    const focus = safeFoods[index % safeFoods.length];
    return {
      title: `${focus} safe-food idea ${index + 1}`,
      body: `A gentle ${ageBand.toLowerCase()} meal idea built around ${focus}, with one small nutrition idea woven in and no pressure to move beyond foods your child already trusts.`,
      optionalVariation: 'Optional, no-pressure variation: keep the same trusted food and change only the serving shape or plate position if that already feels manageable.'
    };
  });
}

export function generateIdeas({
  input,
  ageBand,
  smallListThreshold = 1
}: {
  input: string;
  ageBand: AgeBand;
  smallListThreshold?: number;
}): GenerationResult {
  if (screenInput(input)) {
    return { status: 'screened', message: emergencyResponse };
  }

  const safeFoods = parseSafeFoods(input);
  if (safeFoods.length === 0) {
    return { status: 'error', message: genericErrorMessage };
  }

  const processed = postProcessIdeas(buildFallbackIdeas(safeFoods, ageBand), safeFoods, ageBand);

  if (processed.status === 'ok' && safeFoods.length <= smallListThreshold) {
    return { ...processed, sideNote: smallListSideNote };
  }

  return processed;
}
