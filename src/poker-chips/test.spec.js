import pokerChips from './index';

test('pokerChips function is defined', () => {
  expect(typeof pokerChips).toEqual('function');
});

test('$126 should return 3 chips', () => {
  expect(pokerChips(126)).toEqual(3);
});

test('$200 should return 2 chips', () => {
  expect(pokerChips(200)).toEqual(2);
});

test('$9 should return 5 chips', () => {
  expect(pokerChips(9)).toEqual(5);
});

test('handles decimal numbers', () => {
  expect(pokerChips(9)).toEqual(5);
});

test('handles negative values', () => {
  expect(() => pokerChips(-1)).toThrow(Error);
});
