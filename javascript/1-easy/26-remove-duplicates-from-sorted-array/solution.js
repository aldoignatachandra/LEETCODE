const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution
const removeDuplicates = (nums) => {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

// Testing Solution
const test1 = removeDuplicates([1, 1, 2]);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2);

const test2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 5);

const test3 = removeDuplicates([0, 1, 2, 3, 4, 4, 4, 4, 5, 5]);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 6);

const test4 = removeDuplicates([0, 1, 2, 3]);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, 4);

console.log("All tests passed!");
