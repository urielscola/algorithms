import events from './index';

test('events can be registered then triggered', () => {
  const e = events();

  const cb1 = jest.fn();

  e.on('click', cb1);
  e.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
});

test('Multiple events can be registered then triggered', () => {
  const e = events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  e.on('click', cb1);
  e.on('click', cb2);
  e.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});

test('events can be triggered multiple times', () => {
  const e = events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  e.on('click', cb1);
  e.trigger('click');
  e.on('click', cb2);
  e.trigger('click');
  e.trigger('click');

  expect(cb1.mock.calls.length).toBe(3);
  expect(cb2.mock.calls.length).toBe(2);
});

test('events can have different names', () => {
  const e = events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  e.on('click', cb1);
  e.trigger('click');
  e.on('hover', cb2);
  e.trigger('click');
  e.trigger('hover');

  expect(cb1.mock.calls.length).toBe(2);
  expect(cb2.mock.calls.length).toBe(1);
});

test('events can be toggled off', () => {
  const e = events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  e.on('hover', cb2);

  e.on('click', cb1);
  e.trigger('click');
  e.off('click');
  e.trigger('click');

  e.trigger('hover');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});
