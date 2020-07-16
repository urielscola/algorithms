import LinkedList from './index';



test('LinkedList a class initializes correctly', () => {
  const list = new LinkedList();

  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});

test('Can insertFirst with empty list', () => {
  const list = new LinkedList();
  list.insertFirst(1);

  expect(list.head.data).toEqual(1);
  expect(list.tail.data).toEqual(1);
});

test('Can insertFirst with not empty list', () => {
  const list = new LinkedList();
  list.insertFirst(1);
  list.insertFirst(2);

  expect(list.head.data).toEqual(2);
  expect(list.head.next.data).toEqual(1);
  expect(list.tail.data).toEqual(1);
});

test('Can insertLast with empty list', () => {
  const list = new LinkedList();
  list.insertLast(1);

  expect(list.head.data).toEqual(1);
  expect(list.tail.data).toEqual(1);
});

test('Can insertFirst with not empty list', () => {
  const list = new LinkedList();
  list.insertLast(1);
  list.insertLast(2);

  expect(list.head.data).toEqual(1);
  expect(list.head.next.data).toEqual(2);
  expect(list.tail.data).toEqual(2);
});

test('Can removeFirst with empty list', () => {
  const list = new LinkedList();
  list.removeFirst();

  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});


test('Can removeFirst with one element list', () => {
  const list = new LinkedList();
  list.insertFirst(1);
  list.removeFirst();
  
  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});

test('Can removeFirst with multiple element list', () => {
  const list = new LinkedList();
  list.insertFirst(1);
  list.insertFirst(2);
  list.insertFirst(3);
  list.removeFirst();
  
  expect(list.head.data).toEqual(2);
  expect(list.tail.data).toEqual(1);
});

test('Can removeLast with empty list', () => {
  const list = new LinkedList();
  list.removeLast();

  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});


test('Can removeLast with one element list', () => {
  const list = new LinkedList();
  list.insertLast(1);
  list.removeLast();
  
  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});

test('Can removeLast with multiple element list', () => {
  const list = new LinkedList();
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.removeLast();

  expect(list.head.data).toEqual(1);
  expect(list.tail.data).toEqual(2);
});
