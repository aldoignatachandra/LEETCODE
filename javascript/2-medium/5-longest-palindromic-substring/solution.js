const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} str
 * @return {string}
 */

// Solution
const longestPalindrome = (str) => {
  if (str.length < 2) return str;

  let start = 0;
  let end = 0;

  const expand = (l, r) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  };

  for (let i = 0; i < str.length; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.slice(start, end + 1);
};

// Testing Solution
const test1 = longestPalindrome("babad");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, "bab");

const test2 = longestPalindrome("cbbd");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, "bb");

console.log("All tests passed!");
