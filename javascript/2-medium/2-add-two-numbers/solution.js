const assert = require("assert");

// Param & Return Constraint
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Solution
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode(-1);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const v1 = l1 !== null ? l1.val : 0;
    const v2 = l2 !== null ? l2.val : 0;

    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummy.next;
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
const list1 = createLinkedList([2, 4, 3]);
const list2 = createLinkedList([5, 6, 4]);
const test1 = addTwoNumbers(list1, list2);
console.log("result test1 => ", linkedListToArray(test1));
assert.deepStrictEqual(linkedListToArray(test1), [7, 0, 8]);

const list3 = createLinkedList([0]);
const list4 = createLinkedList([0]);
const test2 = addTwoNumbers(list3, list4);
console.log("result test2 => ", linkedListToArray(test2));
assert.deepStrictEqual(linkedListToArray(test2), [0]);

const list5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const list6 = createLinkedList([9, 9, 9, 9]);
const test3 = addTwoNumbers(list5, list6);
console.log("result test3 => ", linkedListToArray(test3));
assert.deepStrictEqual(linkedListToArray(test3), [8, 9, 9, 9, 0, 0, 0, 1]);

const list7 = createLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const list8 = createLinkedList([5, 6, 4]);
const test4 = addTwoNumbers(list7, list8);
console.log("result test4 => ", linkedListToArray(test4));
assert.deepStrictEqual(
  linkedListToArray(test4),
  [
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]
);

console.log("All tests passed!");
