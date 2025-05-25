const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} str
 * @return {number}
 */

// Solution
const lengthOfLongestSubstring = (str) => {
  const lastSeen = {};
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (lastSeen[ch] !== undefined && lastSeen[ch] >= start) {
      start = lastSeen[ch] + 1;
    }

    lastSeen[ch] = i;

    const windowLen = i - start + 1;
    if (windowLen > maxLen) maxLen = windowLen;
  }

  return maxLen;
};

// Testing Solution
const test1 = lengthOfLongestSubstring("abcabcbb");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 3);

const test2 = lengthOfLongestSubstring("bbbbb");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 1);

const test3 = lengthOfLongestSubstring("pwwkew");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 3);

console.log("All tests passed!");
