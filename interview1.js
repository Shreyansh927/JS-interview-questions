// que: 1
const arr = [1, 2, 3, 4, 5];
const map = arr.map((each) => {
  return each * 2;
});
console.log(map); // [2, 4, 6, 8, 10]

// que: 2
const map1 = arr.map((each) => {
  return (each = 2);
});
console.log(map1); // [ 2, 2, 2, 2, 2 ]

// que: 3
const map2 = arr.map((each) => {
  return each === 2;
});
console.log(map2); // [ false, true, false, false, false ]

// que: 4 "how to convert object into array of key value pairs and also perform mapping operation"
const obj = { a: 1, b: 2, c: 3 };
const arrObj = Object.entries(obj);
const mappedArrObj = arrObj.map(([key, value]) => {
  return [key, value];
});
console.log(arrObj); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

console.log(mappedArrObj); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// que: 5 "how to convert array of key value pairs into object and also perform mapping operation"
const arrKeyValue = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const mappedArrKeyValue = arrKeyValue.map(([key, value]) => {
  return [key, value * 2];
});
const objFromArr = Object.fromEntries(mappedArrKeyValue);

console.log(mappedArrKeyValue); // [ [ 'a', 2 ], [ 'b', 4 ], [ 'c', 6 ] ]
console.log(objFromArr); // { a: 2, b: 4, c: 6 }

// que: 6 "how to use map on string"
const str = "hello";
const mappedStr = Array.from(str).map((char) => {
  return char.toUpperCase();
});
console.log(mappedStr); // [ 'H', 'E', 'L', 'L', 'O' ]
const joinedStr = mappedStr.join("");
console.log(joinedStr); // 'HELLO'

// que: 7 "how to use map on Set"
const set = new Set([1, 2, 3, 4, 5]);
console.log(set); // Set { 1, 2, 3, 4, 5 }
const mappedSet = Array.from(set).map((each) => {
  return each * 3;
});
console.log(mappedSet); // [ 3, 6, 9, 12, 15 ]

const newSet = new Set(mappedSet);
console.log(newSet); // Set { 3, 6, 9, 12, 15 }

// que: 8 "how to use map on Map"
const mapObj = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(mapObj); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
const mappedMap = Array.from(mapObj).map(([key, value]) => {
  return [key, value + 1];
});
console.log(mappedMap); // [ [ 'a', 2 ], [ 'b', 3 ], [ 'c', 4 ] ]
const newMap = new Map(mappedMap);
console.log(newMap); // Map { 'a' => 2, 'b' => 3, 'c' => 4 }

const user = "hell";
const user1 = [...user];
console.log(user1);

// que: 9 "how to use map on arguments object"
function multiplyArguments() {
  const argsArray = Array.from(arguments);
  const mappedArgs = argsArray.map((each) => {
    return each * 2;
  });
  return mappedArgs;
}
console.log(multiplyArguments(1, 2, 3, 4, 5)); // [ 2, 4, 6, 8, 10 ]

// que 10
const obj1 = {};
const obj2 = { a: 1 };
const obj3 = { a: 2 };
obj1[obj2] = { a: 3 };
obj1[obj3] = { a: 4 };
console.log(obj1); // { '[object Object]': { a: 4 } }
console.log(obj1[obj2]); // { a: 4 }
console.log(obj1[obj3]); // { a: 4 }

// que 11 based on curry concept

function sum(a, b) {
  if (a && b) return a + b;
  return function (b) {
    return a + b;
  };
}

console.log(sum(2, 3));
console.log(sum(2)(3)); // curry function

// que 12 based on prototype type co-version
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof 123); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof function () {}); // function
console.log(typeof Symbol("id")); // symbol
console.log(typeof NaN)
console.log([] == []); // false
console.log({} == {}); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true   
