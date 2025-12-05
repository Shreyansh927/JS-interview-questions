// Spread operator: It is used to unpack iterable (eg.. array,, object) into indivisual elements.

const person = {
  name: "Shreyansh",
  skills: ["JS", "React"],
};


const copy = { ...person };  // shallow copy (spread operator)
const deepCopy = JSON.parse(JSON.stringify(person)); // deep copy (using JSON methods)
copy.name = "Raj";
copy.skills.push("Node");


deepCopy.name = "Mohan";
deepCopy.skills.push("Angular");

console.log("Original:", person);
console.log("Copy:", copy);
console.log("Deep Copy:", deepCopy);


var x = 100
{
    var x = -100

}
let y = x 
{
    let y = -200
}
console.log(x) 
console.log(y) 

// spread opertor in arguments

function arg(a,b,c){
    return a+ b+c;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(arg(...numbers))

// Closure : With the help of this concept we can return multiple functions inside a single function 

function currying(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

console.log(currying(10)(20)(30));  // currying

// Infinite currying: It is a functional programming technique where a function that takes multiple arguments is transformed into the sequence of functions that takes single argument.

function add(a){
    return function(b){
        if (b) return add(a+b);
        return a;
    }
}

let sum = add(1)(2)(3)(4)(5)(6)(10)();

console.log(sum)

// Rest Parameter :: With this we can pack multiple values into a single array.

function func(a, ...rest){
    return a + rest.reduce((a,b) => a+b);
}

console.log(func(2, 4,5))