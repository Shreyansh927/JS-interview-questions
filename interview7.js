// Event Bubbling (case 1) => In this case even if i does'nt define any event for button but still it is printing div in the console, propagation is from child to parent direction this unusual behaviour is known as event bubbling.
let div = document.querySelector("div");

div.addEventListener("click", () => {
  console.log("div");
});

// // Event Bubbling (case 2) => In this clearly evident that event bubbling propagation is always from child to parent.
let button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("button");
});

// // Event Capturing => It is similar to the event bubbling but it's propagation is from parent to child.

div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  true
);

button.addEventListener("click", () => {
  console.log("button");
});

// stopPropagation() => This function is particularly used for stopping unusual phenomena of event bubbling.

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button");
});

// // preventDefault() => This function is used cancel the usual behaviour of any function.
let a = document.querySelector("a");

a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("a");
});
