import firstDuplicate from './index';

test('firstDuplicate function exists', () => {
  expect(typeof firstDuplicate).toEqual('function');
});

test('Finds the first duplicate number', () => {
  expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
  expect(firstDuplicate([5, 5, 5, 5, 5])).toEqual(5);
  expect(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8])).toEqual(6);
});

test('Handles non duplicate inputs', () => {
  expect(firstDuplicate([2, 1, 3, 5, 7, 8])).toEqual(-1);
  expect(firstDuplicate([2])).toEqual(-1);
  expect(firstDuplicate([2, 1])).toEqual(-1);
});
