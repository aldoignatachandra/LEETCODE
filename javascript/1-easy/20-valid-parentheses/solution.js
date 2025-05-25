const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} str
 * @return {boolean}
 */

// Solution
const parentheses = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const isValid = (str) => {
  const stack = [];

  for (const char of str) {
    if (parentheses[char]) {
      stack.push(parentheses[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Testing Solution
const test1 = isValid("()");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, true);

const test2 = isValid("()[]{}");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, true);

const test3 = isValid("(]");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, false);

const test4 = isValid("([])");
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, true);

const test5 = isValid("([]){]");
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, false);

const test6 = isValid("([)]");
console.log("result test6 => ", test6);
assert.deepStrictEqual(test6, false);

console.log("All tests passed!");
