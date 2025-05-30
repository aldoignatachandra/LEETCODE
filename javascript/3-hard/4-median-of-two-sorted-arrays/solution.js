const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Solution
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  const len = arr.length;

  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  } else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }
};

// Testing Solution
const test1 = findMedianSortedArrays([1, 3], [2]);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2.0);

const test2 = findMedianSortedArrays([1, 2], [3, 4]);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 2.5);

const test3 = findMedianSortedArrays(
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 9.0);

console.log("All tests passed!");
