console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const result = operand1 + operand2;
  console.log(result);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const result = operand1 - operand2;
  console.log(result);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const result = operand1 * operand2;
  console.log(result);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const result = operand1 / operand2;
  console.log(result);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const result = operand1 ** operand2;
  console.log(result);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const result = operand1 % operand2;
  console.log(result);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
increaseByOneButton.addEventListener("click", () => {
  console.log((operand1 = operand1 + 1));
});

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
increaseByFiveButton.addEventListener("click", () => {
  console.log((operand1 = operand1 + 5));
});

const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decreaseByOneButton.addEventListener("click", () => {
  console.log((operand1 = operand1 - 1));
});

const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decreaseByFiveButton.addEventListener("click", () => {
  console.log((operand1 = operand1 - 5));
});

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  console.log((operand1 = operand1 * 2));
});

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
divideByTwoButton.addEventListener("click", () => {
  console.log((operand1 = operand1 / 2));
});
