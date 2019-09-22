// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

function stack() {
  const s = [];

  function push(el) {
    return s.push(el);
  }

  function pop() {
    return s.pop();
  }

  function peek() {
    return s[s.length - 1];
  }

  return {
    push,
    pop,
    peek
  };
}

export default stack;
