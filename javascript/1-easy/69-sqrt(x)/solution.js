const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number} x
 * @return {number}
 */

// Solution
const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

// Testing Solution
const test1 = mySqrt(4);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2);

const test2 = mySqrt(8);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 2);

console.log("All tests passed!");
