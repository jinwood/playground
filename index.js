import {factory} from './modules/factory';

const SELECTORS = {
  SELECTION_INPUT = "#selection-input",
  RUN_BTN = "#selection-run",
  RESULT = "#result",
};

const selection = document.getElementById(SELECTORS.SELECTION_INPUT);
const resultSp = document.getElementById(SELECTORS.RESULT).textContent("");

const displayResult = (resultText) => resultSp.textContent(resultText);

switch(selection) {
  case 0:
  default:
    displayResult("Something bad happened")
    break;
}
