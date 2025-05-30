const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Solution
const addBinary = (a, b) => {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

// Testing Solution
const test1 = addBinary("11", "1");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, "100");

const test2 = addBinary("1010", "1011");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, "10101");

console.log("All tests passed!");
