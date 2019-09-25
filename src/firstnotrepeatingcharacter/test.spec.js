import firstNotRepeatingCharacter from './index';

test('firstNotRepeatingCharacter function exists', () => {
  expect(typeof firstNotRepeatingCharacter).toEqual('function');
});

test('Finds the first not repeating character', () => {
  expect(firstNotRepeatingCharacter('abacabad')).toEqual('c');
  expect(firstNotRepeatingCharacter('z')).toEqual('z');
});

test('Handles non inputs where there are not non repeated characters', () => {
  expect(firstNotRepeatingCharacter('abacabaabacaba')).toEqual('_');
});
