const assert = require("assert");

// Param & Return Constraint
/**
 * @param {number} n
 * @return {number}
 */

// Solution
const climbStairs = (n) => {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
};

// Testing Solution
const test1 = climbStairs(2);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 2);

const test2 = climbStairs(3);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 3);

console.log("All tests passed!");
