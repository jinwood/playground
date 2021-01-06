// import {factory} from './modules/factory';

const SELECTORS = {
  SELECTION_INPUT: "selection-input",
  RUN_BTN: "selection-run",
  RESULT: "result",
};

const selection = document.getElementById(SELECTORS.SELECTION_INPUT);
const resultElement = document.getElementById(SELECTORS.RESULT);
console.log(selection);

const displayResult = (resultText) => (resultElement.textContent = resultText);

function buttonClick() {
  console.log("button click");
  switch (selection) {
    case 1:
      displayResult("1");
      break;
    case 0:
    default:
      displayResult("Something bad happened");
      break;
  }
}
