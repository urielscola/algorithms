// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

function queue() {
  const q = [];

  function add(el) {
    return q.unshift(el);
  }

  function remove() {
    return q.pop();
  }

  return {
    add,
    remove
  };
}

export default queue;
