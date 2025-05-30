const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Solution
const isMatch = (s, p) => {
  const pattern = new RegExp(`^${p}$`);
  return pattern.test(s);
};

// Testing Solution
const test1 = isMatch("aa", "a");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, false);

const test2 = isMatch("aa", "a*");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, true);

const test3 = isMatch("ab", ".*");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, true);

console.log("All tests passed!");
