import assert from 'node:assert/strict';
import { test, compile, evaluate } from '@x12i/condix';

assert.equal(test('has(input.score) && input.score > 3', { input: { score: 5 } }), true);
const aboveThreshold = compile('value > 3');
assert.equal(aboveThreshold({ value: 4 }), true);
assert.equal(aboveThreshold({ value: 2 }), false);
console.log('Item count:', evaluate('size(items)', { items: [1, 2, 3] }));
console.log('Condition evaluation passed.');
