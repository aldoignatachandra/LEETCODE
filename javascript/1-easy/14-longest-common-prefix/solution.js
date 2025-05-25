const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string[]} strs
 * @return {string}
 */

// Solution
const longestCommonPrefix = (strs) => {
  if (!strs) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

// Testing Solution
const test1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, "fl");

const test2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, "");

const test3 = longestCommonPrefix([
  "interspecies",
  "interstellar",
  "interstate",
]);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, "inters");

const test4 = longestCommonPrefix(["throne", "dungeon"]);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, "");

const test5 = longestCommonPrefix(["prefix", "prefix", "prefixTesting"]);
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, "prefix");

console.log("All tests passed!");
