import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  ageBands,
  buildFallbackIdeas,
  emergencyResponse,
  generateIdeas,
  postProcessIdeas,
  screenInput,
  sourceConstraints,
  validateIdea
} from '../src/lib/generatorSafety.ts';

const beigeFoods = ['toast', 'plain pasta', 'crackers'];

describe('generator safety guardrails', () => {
  it('keeps minimal inputs inside the safe-food zone for every age band', () => {
    for (const ageBand of ageBands) {
      for (const safeFoods of [['toast'], ['toast', 'plain pasta']]) {
        const ideas = buildFallbackIdeas(safeFoods, ageBand);
        assert.equal(ideas.length, 5);
        for (const idea of ideas) {
          assert.deepEqual(validateIdea(idea, safeFoods, ageBand), []);
        }
      }
    }
  });

  it('does not try to fix all-beige input by forcing vegetables or colourful foods', () => {
    const result = generateIdeas({ input: beigeFoods.join(', '), ageBand: '3–5 years' });
    assert.equal(result.status, 'ok');
    if (result.status !== 'ok') return;

    const rendered = result.ideas.map((idea) => `${idea.title} ${idea.body} ${idea.optionalVariation ?? ''}`.toLowerCase()).join('\n');
    assert.doesNotMatch(rendered, /broccoli|spinach|kale|rainbow|vegetable/i);
    for (const food of beigeFoods) {
      assert.match(rendered, new RegExp(food));
    }
  });

  it('does not expand an entered allergen into other allergens', () => {
    const result = generateIdeas({ input: 'egg', ageBand: '6–8 years' });
    assert.equal(result.status, 'ok');
    if (result.status !== 'ok') return;

    const rendered = result.ideas.map((idea) => `${idea.title} ${idea.body} ${idea.optionalVariation ?? ''}`.toLowerCase()).join('\n');
    assert.match(rendered, /egg/);
    assert.doesNotMatch(rendered, /peanut|sesame|shellfish|prawn|cashew|almond/);
  });

  it('fails closed on malformed, empty, or unsafe model output', () => {
    assert.equal(postProcessIdeas(null, ['toast'], '3–5 years').status, 'error');
    assert.equal(postProcessIdeas([], ['toast'], '3–5 years').status, 'error');
    assert.equal(postProcessIdeas([{ text: 'raw model refusal' }], ['toast'], '3–5 years').status, 'error');
    assert.equal(
      postProcessIdeas([{ title: 'Broccoli fix', body: 'This will fix eating and help weight gain.' }], ['toast'], '3–5 years').status,
      'error'
    );
  });

  it('enforces sourced age-band constraints post-generation', () => {
    assert.ok(sourceConstraints.length >= 5);
    assert.equal(
      postProcessIdeas([{ title: 'Whole grapes', body: 'Serve whole grapes beside toast.' }], ['toast'], '1–2 years').status,
      'error'
    );
    assert.equal(
      postProcessIdeas([{ title: 'Popcorn bowl', body: 'Serve popcorn beside crackers.' }], ['crackers'], '3–5 years').status,
      'error'
    );
    assert.equal(
      postProcessIdeas([{ title: 'Apple chunks', body: 'Serve hard apple chunks beside toast.' }], ['toast'], '1–2 years').status,
      'error'
    );
  });

  it('screens acute concern and pressure-framed input before generation', () => {
    for (const input of [
      "she's barely eaten in three days",
      "he won't drink and seems dehydrated",
      'weight loss and vomiting after meals',
      'make him eat vegetables',
      'force her to try broccoli'
    ]) {
      assert.equal(screenInput(input), true, input);
      assert.deepEqual(generateIdeas({ input, ageBand: '3–5 years' }), { status: 'screened', message: emergencyResponse });
    }
  });

  it('adds the small-list side note alongside results for one or two safe foods, not instead of them', () => {
    for (const input of ['toast', 'toast, pasta']) {
      const result = generateIdeas({ input, ageBand: '3–5 years' });
      assert.equal(result.status, 'ok');
      if (result.status !== 'ok') return;
      assert.equal(result.ideas.length, 5);
      assert.ok(result.sideNote);
      assert.doesNotMatch(result.sideNote, /ARFID|diagnos/i);
    }

    const threeFoodResult = generateIdeas({ input: 'toast, pasta, crackers', ageBand: '3–5 years' });
    assert.equal(threeFoodResult.status, 'ok');
    if (threeFoodResult.status !== 'ok') return;
    assert.equal(threeFoodResult.sideNote, undefined);
  });
});
