const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

// create add function
function add() {
  // parseInt() or a + can be used to convert string to number
  const enteredNumber = getUserInput;
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
  // return ends the function - anyting below, that is within the function, wont be executed
}

// event listener to add button - when add button is clicked have JS looks at the add function and executes it
addBtn.addEventListener("click", add);
