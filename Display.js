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
  
    addFront(val) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
  
    display() {
      let runner = this.head;
      let result = '';
      while (runner) {
        result += runner.data + ', ';
        runner = runner.next;
      }
      return result.trim().slice(0, -1); // remove trailing comma and space
    }
  }
  
  let SLL1 = new SLL();// => Node { data: 76, next: null }
  SLL1.addFront(76);// => Node { data: 2, next: Node { data: 76, next: null } }
  SLL1.addFront(2);// => "2, 76"
  SLL1.addFront(11.41);// => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } }
  
  console.log(SLL1.display()); // Output: "11.41, 2, 76"