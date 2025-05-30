const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Solution
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
};

// Testing Solution
const test1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, [1, 2, 2, 3, 5, 6]);

const test2 = merge([1], 1, [], 0);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, [1]);

const test3 = merge([0], 0, [1], 1);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, [1]);

console.log("All tests passed!");
