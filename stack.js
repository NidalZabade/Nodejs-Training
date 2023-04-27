export class Stack {
  constructor() {
    this.items = [];
  }
  // Pushes an element onto the stack (numbers only)
  push(element) {
    this.items.push(element);
  }
  // Remove the last element from the stack and return it if exists
  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  // Remove the first element from the stack and return it if exists
  trim() {
    if (this.items.length == 0) return "Underflow";
    return this.items.shift();
  }
  // Checks if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }
  // Return stack size
  size() {
    return this.items.length;
  }
  // Returns the top element of the stack if it exists
  peek() {
    return this.items[this.items.length - 1];
  }
  // Returns a space-separated string that contains all stack elements;
  displayStack(stack) {
    return stack.items.join(" ");
  }
  // Return a new stack in reverse order
  reverse_stack(stack) {
    return stack.items.reverse();
  }
  // Return the max element in the stack (return -1 if it does not exists)
  max() {
    return Math.max(...this.items);
  }
  // Return the min element in the stack (return -1 if it does not exists)
  min() {
    return Math.min(...this.items);
  }
  // Remove all the elements from the stack
  clear() {
    this.items = [];
  }
  // Find the element in the stack
  find(element) {
    return this.items.indexOf(element);
  }
  // Return a non-duplicated stack
  set() {
    return [...new Set(this.items)];
  }
  // Return the n-th element from the top
  top(n) {
    return this.items[n - 1];
  }
  // Return the n-th element from the bottom
  bottom(n) {
    return this.items[this.items.length - n];
  }
  // Remove the element at the given index if it exists
  remove(index) {
    return this.items.splice(index, 1);
  }
}
