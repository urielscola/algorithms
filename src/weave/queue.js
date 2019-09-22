function queue() {
  const q = [];

  function add(el) {
    return q.unshift(el);
  }

  function remove() {
    return q.pop();
  }

  function peek() {
    return q[q.length - 1];
  }

  return {
    add,
    remove,
    peek
  };
}

export default queue;
