// que based on truthy and falsy values in JavaScript

// study it from notes
if ([]) {
  console.log("This array is truthy."); // This block will execute
} else {
  console.log("This array is falsy.");
}

// que based on truthy and falsy values in JavaScript and type coercion

if ([] == true) {
  console.log("This object is truthy.");
} else {
  console.log("This object is falsy."); // This block will execute
}

var abc = 25;
if (function f() {}) {
  abc = abc + typeof f;
}

console.log(abc); // 25undefined

function Add(a) {
  return function (b) {
    if (b !== undefined) return Add(a + b);
    return a;
  };
}

console.log(Add(1)(2)(3)(4)(5)()); // ✅ Output: 15

console.log([1,2,3]) 
console.log([1, 2, 3] + [4, 5, 6]); // "1,2,34,5,6"

console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log({} + {}); // "[object Object][object Object]"
console.log(0 + []); // "0"
console.log(0 + {}); // "[object Object]"
console.log([] + 0); // "0"
console.log({} + 0); // "[object Object]0"
console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false

console.log([] == ![]); // true
console.log([] == false); // true
console.log(![] == false); // true
console.log([] === false); // false
console.log({} == false); // false
console.log(!{} == false); // false
console.log({} === false); // false
console.log(typeof isNaN("hello")); // "boolean"
console.log(isNaN(23)); // false