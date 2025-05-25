const assert = require("assert");

// Param & Return Constraint
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) current.next = list1;
  if (list2 !== null) current.next = list2;

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
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const test1 = mergeTwoLists(list1, list2);
console.log("result test1 => ", linkedListToArray(test1));
assert.deepStrictEqual(linkedListToArray(test1), [1, 1, 2, 3, 4, 4]);

const list3 = createLinkedList([]);
const list4 = createLinkedList([]);
const test2 = mergeTwoLists(list3, list4);
console.log("result test2 => ", linkedListToArray(test2));
assert.deepStrictEqual(linkedListToArray(test2), []);

const list5 = createLinkedList([]);
const list6 = createLinkedList([0]);
const test3 = mergeTwoLists(list5, list6);
console.log("result test3 => ", linkedListToArray(test3));
assert.deepStrictEqual(linkedListToArray(test3), [0]);

console.log("All tests passed!");
