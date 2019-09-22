// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import stack from '../stack';

function queue() {
  const stackOne = stack();
  const stackTwo = stack();

  function add(el) {
    return stackOne.push(el);
  }

  function remove() {
    let element;

    while (stackOne.peek()) {
      element = stackOne.peek();
      stackTwo.push(stackOne.pop());
      if (!stackOne.peek()) stackTwo.pop();
    }

    while (stackTwo.peek()) {
      stackOne.push(stackTwo.pop());
    }

    return element;
  }

  function peek() {
    let element;

    while (stackOne.peek()) {
      element = stackOne.peek();
      stackTwo.push(stackOne.pop());
    }

    while (stackTwo.peek()) {
      stackOne.push(stackTwo.pop());
    }

    return element;
  }

  return {
    add,
    remove,
    peek
  };
}

export default queue;
