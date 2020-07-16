import stringHasOnlyUniqueChars from './index';

test('retuns true if all characters are unique', () => {
  expect(stringHasOnlyUniqueChars('abc')).toBe(true);
});

test('retuns false if some characters arent unique', () => {
  expect(stringHasOnlyUniqueChars('abcc')).toBe(false);
});

test('retuns true if sample string is empty', () => {
  expect(stringHasOnlyUniqueChars('')).toBe(true);
});

test('retuns false if sample string has same characters with different cases', () => {
  expect(stringHasOnlyUniqueChars('AaBbCc')).toBe(false);
});

test('retuns false even with duplicated special chars', () => {
  expect(stringHasOnlyUniqueChars('!!')).toBe(false);
});