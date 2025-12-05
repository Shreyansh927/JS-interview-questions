// factory function : it is any function call that always returns a new object for every function call.

function createUSer(name, age) {
  return {
    name: name,
    age: age,
    start: function () {
      console.log(`welcome ${name}`);
    },
  };
}

const user1 = createUSer("john", 25);
const user2 = createUSer("jane", 30);

console.log(typeof(user1));
console.log(user2);


// Constructor function : IT is a regular function that returns a new object when called using new operator. The created object is called instance.


function Car(brand, color){
   
        this.brand = brand,
        this.color = color,
        this.start1 = function(){
            console.log(`welcome ${this.brand}`)
        }
    
}

let car1 = new Car("Alto", "red");
let car2 = new Car("baleno", "blue")

console.log(car1)
console.log(car2)
console.log(car2.start1());



// date functions
// 1
const now = new Date();
console.log(now)

// 2
const date = new Date("2022-08-08")
console.log(date)