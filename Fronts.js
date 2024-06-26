class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
  
    removeFront() {
      if (this.head === null) {
        return null;
      }
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return this.head;
    }
  
    front() {
      if (this.head === null) {
        return null;
      }
      return this.head.data;
    }
  }
  
  let SLL1 = new SLL();
  SLL1.addFront(18);// => Node { data: 18, next: null }
  SLL1.addFront(5);// => Node { data: 5, next: Node { data: 18, next: null } }
  SLL1.addFront(73);// => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } }
  
  console.log(SLL1.front()); // 73
  console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
  console.log(SLL1.front()); // 5
  console.log(SLL1.removeFront()); // Node { data: 18, next: null }
  console.log(SLL1.front()); // 18
  console.log(SLL1.removeFront()); // null
  console.log(SLL1.front()); // null