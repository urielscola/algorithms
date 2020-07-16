const makeNode = (data) => ({
  data, next: null
});

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    const node = makeNode(data);
    
    if (this.head === null) {
      this.head = node;
      return this.tail = node;
    }

    node.next = this.head;
    this.head = node;
  }

  insertLast(data) {
    const node = makeNode(data);

    if (this.tail === null) {
      this.head = node;
      return this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  }

  removeFirst() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      return this.tail = null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      return this.tail = null;
    }

    let node = this.head;
    let prev;
    while (node.next) {
      prev = node;
      node = node.next; 
    }

    prev.next = null;
    this.tail = prev;
  }

  getItems() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }
  }
}

export default LinkedList;