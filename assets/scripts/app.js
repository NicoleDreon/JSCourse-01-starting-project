const defaultResult = 0;
let currentResult = defaultResult;

// create function
function add(num1, num2) {
  const result = num1 + num2;
  alert("The result is " + result);
}

// call function
add(4, 5);
add(2, 4);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
