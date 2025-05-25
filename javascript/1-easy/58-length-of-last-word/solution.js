const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} str
 * @return {number}
 */

// Solution
const lengthOfLastWord = (str) => {
  const text = str.trim().split(" ");
  return text[text.length - 1].length;
};

// Testing Solution
const test1 = lengthOfLastWord("Hello World");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 5);

const test2 = lengthOfLastWord("   fly me   to   the moon  ");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 4);

const test3 = lengthOfLastWord("luffy is still joyboy");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 6);

console.log("All tests passed!");
