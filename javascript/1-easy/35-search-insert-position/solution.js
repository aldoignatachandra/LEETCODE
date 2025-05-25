const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution
const searchInsert = (nums, target) => {
  let result = nums.indexOf(target);

  if (target < nums[0]) return 0;

  if (result < 0) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > target && nums[i - 1] < target) {
        result = i;
        break;
      }
    }
  }

  return result < 0 ? nums.length : result;
};

// Testing Solution
const test1 = searchInsert([1, 3, 5, 6], 5);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2);

const test2 = searchInsert([1, 3, 5, 6], 2);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 1);

const test3 = searchInsert([1, 3, 5, 6], 7);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 4);

const test4 = searchInsert([1, 3, 5, 6], 0);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, 0);

console.log("All tests passed!");
