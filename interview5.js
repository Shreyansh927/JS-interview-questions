// function expression
const app = function () {
  console.log(this); // // Window {window: Window {}, self: Window {},...
};
app();

// function declaration (regular function)

function man() {
  console.log(this); // Window {window: Window {}, self: Window {},...
}
man();

//arrow function
const arrow = () => {
  console.log(this); // Window {window: Window {}, self: Window {},...
};
arrow();

// object method (function expression)

let obj = {
  car: "audi",
  start: function () {
    console.log(this); // Object {car: "audi", start: start()}
  },
  start2: () => {
    console.log(this); // Window {window: Window {}, self: Window {},...
  },
};
obj.start();
obj.start2();

// factory function

function createCar(color, brand) {
  return {
    color: color,
    brand: brand,
    start: function () {
      console.log(this); // Object {color: "blue", brand: "Audi", start...
    },
    start2: () => {
      console.log(this); // Window {window: Window {}, self: Window {},...
    },
  };
}

let car1 = createCar("blue", "Audi");
car1.start();
car1.start2();

// Constructor Function

function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function () {
    console.log(this); // Car {color: "blue", brand: "Audi", start...
  };
  this.start2 = () => {
    console.log(this); // Car {color: "blue", brand: "Audi", start...
  };
}

let car2 = new Car("blue", "Audi");
car2.start();
car2.start2();
