const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Solution
const removeElement = (nums, val) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

// Testing Solution
const test1 = removeElement([3, 2, 2, 3], 3);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2);

const test2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 5);

const test3 = removeElement([], 0);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 0);

const test4 = removeElement([1, 3, 5, 7], 2);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, 4);

const test5 = removeElement([2, 2, 2, 2], 2);
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, 0);

console.log("All tests passed!");
