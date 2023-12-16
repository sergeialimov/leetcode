/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import assert from 'assert';

function checkBrackets (str): boolean {
  const openBrackets = new Set ([ '(', '[', '{' ]);
  const closeBrackets = new Set ([ ')', ']', '}' ]);

  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (openBrackets.has(currentChar)) {
      stack.push(currentChar);
    } else if (closeBrackets.has(currentChar)) {
      const lastEl = stack.pop();
      if (!lastEl || map[currentChar] !== lastEl) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

assert.strictEqual(checkBrackets('{[()]}'), true, 'Test Failed');
assert.strictEqual(checkBrackets('{tt[t]tr[aw]aqwe}asdaaasd{sdweda[a{asd}{asd}a]sda}'), true, 'Test 1 Failed');
assert.strictEqual(checkBrackets('{tt[t]tr[aw]aqwe}asdaaasd{sdweda[a{asd}{asd}a]sda}}'), false, 'Test 1 Failed');


// Test cases for correct strings
assert.strictEqual(checkBrackets('{[()]}'), true, 'Test Failed: "{[()]}" is a valid combination');
assert.strictEqual(checkBrackets('[]{}()'), true, 'Test Failed: "[]{}()" is a valid combination');
assert.strictEqual(checkBrackets('{([])}'), true, 'Test Failed: "{([])}" is a valid combination');
assert.strictEqual(checkBrackets('({}[])'), true, 'Test Failed: "({}[])" is a valid combination');
assert.strictEqual(checkBrackets(''), true, 'Test Failed: An empty string is a valid combination');

// Test cases for incorrect strings
assert.strictEqual(checkBrackets('{[(])}'), false, 'Test Failed: "{[(])}" is an invalid combination');
assert.strictEqual(checkBrackets('{[}'), false, 'Test Failed: "{[}" is an invalid combination');
assert.strictEqual(checkBrackets('[(])'), false, 'Test Failed: "[(])" is an invalid combination');
assert.strictEqual(checkBrackets('([)]'), false, 'Test Failed: "([)]" is an invalid combination');
assert.strictEqual(checkBrackets('{[()]}}'), false, 'Test Failed: "{[()]}}" has extra closing brackets');

// Test cases for strings with other characters
assert.strictEqual(checkBrackets('{a[b(c)d]e}'), true, 'Test Failed: "{a[b(c)d]e}" with characters is a valid combination');
assert.strictEqual(checkBrackets('(123[456]{789})'), true, 'Test Failed: "(123[456]{789})" with numbers is a valid combination');
assert.strictEqual(checkBrackets('text( and { some [ more ] text } here)'), true, 'Test Failed: "text( and { some [ more ] text } here)" with text is a valid combination');

// Test cases for nested brackets
assert.strictEqual(checkBrackets('{{{{{{{{}}}}}}}}'), true, 'Test Failed: "{{{{{{{{}}}}}}}}" deeply nested is a valid combination');
assert.strictEqual(checkBrackets('((((((((()))))))))'), true, 'Test Failed: "((((((((()))))))))" deeply nested is a valid combination');


