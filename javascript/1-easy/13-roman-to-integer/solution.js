const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} str
 * @return {number}
 */

// Solution
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (str) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (roman[str[i]] < roman[str[i + 1]]) {
      let temp = roman[str[i + 1]] - roman[str[i]];
      result += temp;
      i++;
      continue;
    }
    result += roman[str[i]];
  }

  return result;
};

// Testing Solution
const test1 = romanToInt("III");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 3);

const test2 = romanToInt("LVIII");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 58);

const test3 = romanToInt("MCMXCIV");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 1994);

const test4 = romanToInt("CMXCIX");
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, 999);

const test5 = romanToInt("MMMCMXCIX");
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, 3999);

console.log("All tests passed!");
