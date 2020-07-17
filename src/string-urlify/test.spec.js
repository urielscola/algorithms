import urlify from './index';

test('correctly replaces whitespaces', () => {
  expect(urlify('Hello world')).toBe('Hello%20world');
});

test('correctly replaces whitespaces with extra whitespaces at beginning and end', () => {
  expect(urlify('   Hello world    ')).toBe('Hello%20world');
});

test('handles empty string', () => {
  expect(urlify('')).toBe('');
});
