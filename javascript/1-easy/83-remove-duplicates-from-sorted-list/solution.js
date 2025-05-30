const assert = require("assert");

// Param & Return Constraint
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solution
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = (head) => {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

const createLinkedList = (arr) => {
  const dummy = new ListNode(-1);
  let current = dummy;
  for (const item of arr) {
    current.next = new ListNode(item);
    current = current.next;
  }
  return dummy.next;
};

const linkedListToArray = (head) => {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

// Testing Solution
const list1 = createLinkedList([1, 1, 2]);
const test1 = deleteDuplicates(list1);
console.log("result test1 => ", linkedListToArray(test1));
assert.deepStrictEqual(linkedListToArray(test1), [1, 2]);

const list2 = createLinkedList([1, 1, 2, 3, 3]);
const test2 = deleteDuplicates(list2);
console.log("result test2 => ", linkedListToArray(test2));
assert.deepStrictEqual(linkedListToArray(test2), [1, 2, 3]);

console.log("All tests passed!");
