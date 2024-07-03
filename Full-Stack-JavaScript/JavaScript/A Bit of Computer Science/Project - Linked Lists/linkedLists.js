// 2024, Amal Kariyawasam

// Project: Linked Lists
/*
You will need two classes or factories:

1) LinkedList class / factory, which will represent the full list.
2) Node class / factory, containing a value property and a link to the nextNode, set both as null by default.


Build the following functions in your linked list class / factory:

1) append(value) adds a new node containing value to the end of the list
2) prepend(value) adds a new node containing value to the start of the list
3) size returns the total number of nodes in the list
4) head returns the first node in the list
5) tail returns the last node in the list
6) at(index) returns the node at the given index
7) pop removes the last element from the list
8) contains(value) returns true if the passed in value is in the list and otherwise returns false.
9) find(value) returns the index of the node containing value, or null if not found.
10) toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Extra credit
1) insertAt(value, index) that inserts a new node with the provided value at the given index.
2) removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
*/

console.log("Project Linked Lists");

class LinkedList {
  // append(value) adds a new node containing value to the end of the list
  append(value) {}

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {}

  // size returns the total number of nodes in the list
  size() {
    console.log("Size of the Linked List is: ");
  }

  // head returns the first node in the list
  head() {}

  // tail returns the last node in the list
  tail() {}

  // at(index) returns the node at the given index
  at(index) {}

  // pop removes the last element from the list?
  pop() {}
  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {}

  // find(value) returns the index of the node containing value, or null if not found.

  find(value) {}

  toString() {}
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  newNode(value, nextNode = null) {
    return { value, nextNode };
  }
}

const newLinkedList = new LinkedList();
const newNode = new Node();

newLinkedList.size();

console.log(newNode.newNode("TestNode", 2));

const testObject = {
  head: { data: 01 },
  01: { data: 02 },
  02: { data: 03 },
  03: { data: 04 },
};
console.log(testObject);

// delete testObject.data1;

for (let x in testObject) {
  console.log(testObject[x]);
  // console.log(testObject[0])
}