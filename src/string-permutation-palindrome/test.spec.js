import stringPermutationCanFormPalindrome from './index';

test('should return false to "code" input', () => {
  expect(stringPermutationCanFormPalindrome('code')).toBe(false);
});

test('should return true to "aab" input', () => {
  expect(stringPermutationCanFormPalindrome('aab')).toBe(true);
});

test('should return true to "carerac" input', () => {
  expect(stringPermutationCanFormPalindrome('code')).toBe(false);
});

test('should return true to "Tact Coa" input', () => {
  expect(stringPermutationCanFormPalindrome('Tact Coa')).toBe(false);
});
