// // que based on lexical scope, closure, let var const, spread operator , rest operator
// // console.log(abc);
// // var abc = "hello world"; // undefined

// // console.log(de);
// // let de = "hello js"; // ReferenceError: Cannot access 'de' before initialization

// // console.log(xyz);
// // const xyz = "hello es6"; // ReferenceError: Cannot access 'xyz' before initialization

// function sum(a, b) {
//   // que based on curry concept
//   if (a && b) return a + b;
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(2, 3));
// console.log(sum(2)(3)); // curry function

// const abc = {
//   name: "hello",
//   age: 25,
//   address: "india",
// };

// let xy = { ...abc, name: "helloo" }; // que based on spread operator

// const { name, ...pqr } = abc; // que based on rest operator

// console.log(xy);
// console.log(pqr);
// console.log("2" - -(-(-"3")));

// async function example() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise;
//   console.log("aaa");
//   console.log(result);
// }

// example();

// let url = "https://apis.ccbp.in/jokes/random";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.value);
//     console.log(typeof data);
//   });

// const out = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (resolve) {
//         resolve("resolved successfully");
//       } else {
//         reject("error occured");
//       }
//     });
//   });
// };

// out()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const gatheringPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (resolve) {
//         resolve("sticks gathered");
//       } else {
//         reject("error occured");
//       }
//     });
//   });
// };

// const arrangingPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("sticks arranged");
//     });
//   });
// };

// const lighttingPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (resolve) {
//         resolve("fire lit");
//       } else {
//         reject("error occured");
//       }
//     });
//   });
// };

// // const promise1 = async () => {
// //   try {
// //     const gather = await gatheringPromise();
// //     console.log(gather);
// //     const arrange = await arrangingPromise();
// //     console.log(arrange);
// //     const light = await lighttingPromise();
// //     console.log(light);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// gatheringPromise()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// arrangingPromise()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// lighttingPromise()
//   .then((res) => {
//     console.log(res);
//     console.log(typeof res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // promise1();

// // que "remove duplicates from array using map"

// const arr = [1, 2, 3, 4, 5, 5, 4];
// const newArr = [];
// const mapp = arr.map((each) => {
//   if (!newArr.includes(each)) {
//     newArr.push(each);
//   }
// });

// console.log(newArr);

// // que "filter fruits based on length of fruit name odd or even"

// const fruits = ["apple", "banana", "orange", "grape"];
// const filteredFruits = [];
// const output = fruits.filter((each) => each.length % 2 === 1);

// console.log(output);

// // que "average of numbers present at even indices"

// const arr1 = [12, 2, 2, 4, 1];
// const avg = arr1.filter((each, index) => index % 2 === 0);

// console.log(avg);
// const sumAvg = avg.reduce((acc, curr) => acc + curr, 0) / avg.length;

// console.log(sumAvg);

// // que "check whether all elements in sub arrays are greater than limit or not"

// const limit = 9;
// const array1 = [
//   [8, 12],
//   [12, 15],
//   [15, 18],
// ];
// const boolArray = [];
// for (let arr of array1) {
//   const filteredArray1 = arr.filter((each) => each > limit);
//   if (filteredArray1.length === arr.length) {
//     boolArray.push(true);
//   } else {
//     boolArray.push(false);
//   }
// }

// console.log(boolArray);

// // que "check whether all strings in array are within given length range"

// const min = 4;
// const max = 10;
// const alp = ["ajay", "sachin", "rohit", "dhoni", "yuvi", "rahul"];

// const filteredAlp = alp.filter(
//   (each) => each.length >= min && each.length <= max
// );

// if (filteredAlp.length === alp.length) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // que "check whether at least one fruit is in rotten state"

// const fruits2 = [
//   { fruitName: "apple", state: "fresh" },
//   { fruitName: "banana", state: "rotten" },
//   { fruitName: "grape", state: "fresh" },
// ];

// const someState = fruits2.some((each) => each.state === "rotten");
// console.log(someState);

// const inputString = "Hello-World-from-JavaScript";
// const seperator = "-";
// const replaceString = "python";

// const newString = inputString.split(seperator);
// console.log(newString);
// const maped = newString.map((each) => {
//   if (each.length > 4) {
//     inputString.replace(each, replaceString);
//   }
// });

// console.log(maped.join(" "));

// const arr3 = [
//   [1, 2],
//   [2, 3],
// ];
// const arr4 = arr3.map((each) => {
//   return each.reduce((a, b) => a * b);
// });
// console.log(arr4);

// const url1 = "https://apis.ccbp.in/jokes/random";

// const fetchJoke = () => {
//   return new Promise((resolve, reject) => {});
// };

// const fetchUserData = async () => {
//   try {
//     const response = await fetch("https://apis.ccbp.in/jokes/random");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return;
//   }
// };

// console.log("hello");
// fetchUserData();
// console.log("world");
// let count = 0;
// const id = () => {
//   setInterval(() => {
//     console.log("Start");
//     count++;
//     for (let i = 0; i < 1e9; i++) {
//       console.log("End");
//       if (count === 3) {
//         clearInterval(id);
//       }
//     } // long task
//   }, 1000);
// };

// id();

//
let str = "Deepesh kumar mmmmar";
let arr1 = [];
let arr2 = [];
str = str.replaceAll(" ", "");
let str2 = str.split("");
let mapping = str2.map((each) => {
  if (!arr1.includes(each)) {
    arr1.push(each);
  } else {
    if (!arr2.includes(each)) {
      arr2.push(each);
    }
  }
});
console.log(arr1);
console.log(arr2);

function abc(a = 10, b = 30) {
  return a + b;
}
console.log(abc(5, 15));

console.log(abc(5));
console.log(abc());

const funct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolve) {
        resolve("resolved successfully");
      }
      else{
        reject("error occured");
      }
    }, 2000);
  });
};

const call = async() => {
  try{
    const res = await funct()
    console.log(res);
  }
  catch(err){
    console.log(err);
  }
}
call();