import isPermutation from './index';

test('returns true to identical strings', () => {
  expect(isPermutation('hello', 'hello')).toBe(true);
});

test('returns true to permutable strings', () => {
  expect(isPermutation('hello', 'helol')).toBe(true);
});

test('returns true to reversed strings', () => {
  expect(isPermutation('hello', 'olleh')).toBe(true);
});

test('returns false to unpermutable strings', () => {
  expect(isPermutation('hello', 'jonny')).toBe(false);
});

test('returns false if empty string is provided', () => {
  expect(isPermutation('', 'hi')).toBe(false);
  expect(isPermutation('hi', '')).toBe(false);
  expect(isPermutation('', '')).toBe(false);
});

test('returns false sum of ASCII values are the same, but string is not permutable', () => {
  expect(isPermutation('ac', 'bb')).toBe(false);
});