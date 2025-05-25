const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution
const twoSum = (nums, target) => {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (map.has(remaining)) {
      result.push(map.get(remaining), i);
    }

    map.set(nums[i], i);
  }

  return result;
};

// Testing Solution
const test1 = twoSum([2, 7, 11, 15], 9);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, [0, 1]);

const test2 = twoSum([3, 2, 4], 6);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, [1, 2]);

const test3 = twoSum([3, 3], 6);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, [0, 1]);

const test4 = twoSum([1, 2, 3, 7, 10], 5);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, [1, 2]);

console.log("All tests passed!");
