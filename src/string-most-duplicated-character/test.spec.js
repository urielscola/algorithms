import mostDuplicatedCharacter from './index';

test('retuns 3 for input string "hello world"', () => {
  expect(mostDuplicatedCharacter('hello world')).toBe(3);
});

test('retuns 1 for input string "melon"', () => {
  expect(mostDuplicatedCharacter('melon')).toBe(1);
});

test('retuns 0 for empty input string ""', () => {
  expect(mostDuplicatedCharacter('')).toBe(0);
});

test('handles inputs with different case', () => {
  expect(mostDuplicatedCharacter('HeLlo WorLD')).toBe(3);
});

test('handles inputs with extra spaces', () => {
  expect(mostDuplicatedCharacter('maria    ')).toBe(2);
});
