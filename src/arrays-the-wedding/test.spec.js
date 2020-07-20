import sameInviteeLists from './index';

test('sameInviteeLists function is defined', () => {
  expect(typeof sameInviteeLists).toEqual('function');
});

test('equal lists in same order should return true', () => {
  expect(sameInviteeLists(['Foo', 'Bar', 'Baz'], ['Foo', 'Bar', 'Baz'])).toBe(true);
});

test('equal lists in different order should return true', () => {
  expect(sameInviteeLists(['Foo', 'Baz', 'Bar'], ['Baz', 'Bar', 'Foo'])).toBe(true);
});

test('different lists should return false', () => {
  expect(sameInviteeLists(['Foo', 'Baz'], ['Bar', 'Foo'])).toBe(false);
});

test('different sizes lists should return false', () => {
  expect(sameInviteeLists(['Foo'], ['Bar', 'Foo'])).toBe(false);
});
