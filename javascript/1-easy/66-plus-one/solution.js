const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Solution
const plusOne = (digits) => {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
    if (carry === 0) break;
  }

  if (carry) digits.unshift(carry);

  return digits;
};

// Testing Solution
const test1 = plusOne([1, 2, 3]);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, [1, 2, 4]);

const test2 = plusOne([4, 3, 2, 1]);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, [4, 3, 2, 2]);

const test3 = plusOne([9]);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, [1, 0]);

const test4 = plusOne([9, 9]);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, [1, 0, 0]);

console.log("All tests passed!");
