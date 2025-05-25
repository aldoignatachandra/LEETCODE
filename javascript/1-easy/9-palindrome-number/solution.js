const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number} num
 * @return {boolean}
 */

// Solution
const isPalindrome = (num) => {
  const convert = String(num).split("").reverse().join("");
  return convert == num ? true : false;
};

// Testing Solution
const test1 = isPalindrome(121);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, true);

const test2 = isPalindrome(10);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, false);

const test3 = isPalindrome(-121);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, false);

const test4 = isPalindrome(731137);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, true);

const test5 = isPalindrome(12332);
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, false);

console.log("All tests passed!");
