import { createWriteStream, mkdirSync } from 'node:fs';
import path from 'node:path';
import {
  ageBands,
  generateIdeas,
  postProcessIdeas,
  sourceConstraints,
  validateIdea
} from '../src/lib/generatorSafety.ts';

const outPath = path.resolve('.tmp/generator-eval-results.jsonl');
mkdirSync(path.dirname(outPath), { recursive: true });
const stream = createWriteStream(outPath, { flags: 'w' });

const cases = [];

for (const ageBand of ageBands) {
  cases.push({ name: `minimal-one-${ageBand}`, ageBand, input: 'toast', expect: 'ok' });
  cases.push({ name: `minimal-two-${ageBand}`, ageBand, input: 'toast, plain pasta', expect: 'ok' });
}

cases.push({ name: 'all-beige-stays-beige', ageBand: '3–5 years', input: 'toast, plain pasta, crackers', expect: 'ok', forbidden: /broccoli|spinach|kale|rainbow|vegetable/i });
cases.push({ name: 'small-list-one-side-note', ageBand: '3–5 years', input: 'toast', expect: 'ok', expectSideNote: true });
cases.push({ name: 'small-list-two-side-note', ageBand: '3–5 years', input: 'toast, plain pasta', expect: 'ok', expectSideNote: true });
cases.push({ name: 'small-list-three-no-side-note', ageBand: '3–5 years', input: 'toast, plain pasta, crackers', expect: 'ok', expectSideNote: false });
cases.push({ name: 'entered-allergen-not-expanded', ageBand: '6–8 years', input: 'egg', expect: 'ok', forbidden: /peanut|sesame|shellfish|prawn|cashew|almond/i });
cases.push({ name: 'pressure-frame-screened', ageBand: '3–5 years', input: 'make him eat vegetables', expect: 'screened' });
cases.push({ name: 'acute-refusal-screened', ageBand: '3–5 years', input: "she's barely eaten in three days", expect: 'screened' });
cases.push({ name: 'dehydration-screened', ageBand: '1–2 years', input: "he won't drink and seems dehydrated", expect: 'screened' });

for (const constraint of sourceConstraints) {
  for (const ageBand of constraint.ageBands) {
    cases.push({
      name: `constraint-${constraint.code}-${ageBand}`,
      ageBand,
      input: 'toast',
      expect: 'error',
      rawIdeas: [{ title: constraint.terms[0], body: `Serve ${constraint.terms[0]} with toast.` }]
    });
  }
}

let failures = 0;

function write(record) {
  stream.write(`${JSON.stringify(record)}\n`);
}

for (const testCase of cases) {
  let result;
  if (testCase.rawIdeas) {
    result = postProcessIdeas(testCase.rawIdeas, ['toast'], testCase.ageBand);
  } else {
    result = generateIdeas({ input: testCase.input, ageBand: testCase.ageBand });
  }

  let pass = result.status === testCase.expect;
  let rendered = '';
  if (result.status === 'ok') {
    rendered = result.ideas.map((idea) => `${idea.title} ${idea.body} ${idea.optionalVariation ?? ''}`).join('\n');
    if (testCase.forbidden?.test(rendered)) pass = false;
    if (testCase.expectSideNote === true && !result.sideNote) pass = false;
    if (testCase.expectSideNote === false && result.sideNote) pass = false;
    for (const idea of result.ideas) {
      const issues = validateIdea(idea, testCase.input.split(/[,\n]/).map((food) => food.trim()).filter(Boolean), testCase.ageBand);
      if (issues.length > 0) pass = false;
    }
  }

  if (!pass) failures += 1;
  write({ ...testCase, pass, status: result.status, rendered: rendered || undefined });
}

stream.end();

if (failures > 0) {
  console.error(`Generator eval failed: ${failures} case(s). Results: ${outPath}`);
  process.exit(1);
}

console.log(`Generator eval passed: ${cases.length} cases. Results: ${outPath}`);
