// Checks if the input text is a numeric string.
function isStringNumeric(inputText) {
  // Regular expression to match any non-digit character.
  const nonDigitRegex = /\D/;
  return (!nonDigitRegex.test(inputText.trim()) && inputText.length > 0);
}

// Converts a valid numeric string to an integer, or returns null for invalid inputs.
function getNumberFromInputString(inputText) {
  if (isStringNumeric(inputText)) {
    return parseInt(inputText.trim());
  } else
    return null;
}

// Creates an array of string representations of numbers from 0 to a given number.
function creatingStringArray(inputNumber) {
  const stringArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    stringArray.push(i.toString());
  }
  return stringArray;
}

// Substitutes specific elements in the array based on the presence of digits 1, 2, or 3.
function substituteArrayElement(stringArray) {
  const oneDigitRegex = /1/;
  const twoDigitRegex = /2/;
  const threeDigitRegex = /3/;
  return stringArray.map(function (element) {
    if (threeDigitRegex.test(element)) {
      return "Won't you be my neighbor?";
    } else if (twoDigitRegex.test(element)) {
      return "Boop!";
    } else if (oneDigitRegex.test(element)) {
      return "Beep!";
    }
    else {
      return element;
    }
  });
}

//UI logic
let currentDisplayFunction = displayResultInLine; // Default display function.
let resultArray = []; // Array to hold the result for display.

// Function to create and display an H2 header.
function creatingH2(string) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = '';
  const h2 = document.createElement("h2");
  h2.textContent = string;
  resultDiv.append(h2);
}

// Displays an error message when invalid input is provided.
function displayErrorMessage() {
  creatingH2("Please enter a valid number. Only digits are allowed.");
  document.getElementById("inline-view").classList.add("hidden");
  document.getElementById("list-view").classList.add("hidden");
  document.getElementById("columns-view").classList.add("hidden");
}

// Displays the result array as a line of text.
function displayResultInLine(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.removeAttribute("class");
  creatingH2("Result: ");
  const resultP = document.createElement("p");
  resultP.classList.add("result");
  let resultString = "";
  resultArray.forEach(function (element) {
    if (isStringNumeric(element)) {
      resultString += element + ", ";
    } else {
      resultString += `"${element}"` + ", ";
    }
  });
  resultP.textContent = resultString.slice(0, -2);
  resultDiv.append(resultP);
}

// Adds items to a list (UL) element for display.
function addItemsToList(resultArray, startIndex, endIndex, resultUl) {
  for (let i = startIndex; i < endIndex; i++) {
    if (i >= resultArray.length) break;
    const resultLi = document.createElement("li");
    resultLi.classList.add("result");
    if (isStringNumeric(resultArray[i])) {
      resultLi.textContent = resultArray[i];
    } else {
      resultLi.textContent = `"${resultArray[i]}"`;
    }
    resultUl.append(resultLi);
  }
}

// Displays the result array as a list.
function displayResultInList(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.removeAttribute("class");
  creatingH2("Result: ");

  const resultUl = document.createElement("ul");
  addItemsToList(resultArray, 0, resultArray.length, resultUl);
  resultDiv.append(resultUl);
}

// Displays the result array in columns.
function displayResultInColumns(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  creatingH2("Result: ");
  resultDiv.classList.add("columns");

  const resultDivFirstColumn = document.createElement("div");
  const resultDivSecondColumn = document.createElement("div");
  const resultDivThirdColumn = document.createElement("div");

  const resultFirstUl = document.createElement("ul");
  const resultSecondUl = document.createElement("ul");
  const resultThirdUl = document.createElement("ul");

  const itemsPerColumn = Math.ceil(resultArray.length / 3);

  addItemsToList(resultArray, 0, itemsPerColumn, resultFirstUl);
  resultDivFirstColumn.append(resultFirstUl);

  addItemsToList(resultArray, itemsPerColumn, itemsPerColumn * 2, resultSecondUl);
  resultDivSecondColumn.append(resultSecondUl);

  addItemsToList(resultArray, itemsPerColumn * 2, resultArray.length, resultThirdUl);
  resultDivThirdColumn.append(resultThirdUl);

  resultDiv.append(resultDivFirstColumn, resultDivSecondColumn, resultDivThirdColumn);
}

// Updates the display icons based on the current display function.
function displayingIcons(currentFunction) {
  if (currentFunction === displayResultInLine) {
    document.getElementById("inline-view").setAttribute("disabled", "true");
    document.getElementById("list-view").removeAttribute("disabled");
    document.getElementById("columns-view").removeAttribute("disabled");
  } else if (currentFunction === displayResultInList) {
    document.getElementById("list-view").setAttribute("disabled", "true");
    document.getElementById("columns-view").removeAttribute("disabled");
    document.getElementById("inline-view").removeAttribute("disabled");
  } else if (currentFunction === displayResultInColumns) {
    document.getElementById("columns-view").setAttribute("disabled", "true");
    document.getElementById("list-view").removeAttribute("disabled");
    document.getElementById("inline-view").removeAttribute("disabled");
  }
}

// Event handler for form submission to process and display results.
function getResult(e) {
  e.preventDefault();
  const inputNumber = document.getElementById("inputNumber").value;
  document.getElementById("resultDivContainer").classList.remove("hidden");
  document.getElementById("reset").removeAttribute("disabled");
  document.getElementById("inline-view").classList.remove("hidden");
  document.getElementById("list-view").classList.remove("hidden");
  document.getElementById("columns-view").classList.remove("hidden");

  if (getNumberFromInputString(inputNumber) === null) {
    displayErrorMessage();
  }
  else {
    resultArray = substituteArrayElement(creatingStringArray(inputNumber));
    currentDisplayFunction(resultArray);
    displayingIcons(currentDisplayFunction);
  }
}

// Resets the application to its initial state.
function resetResult() {
  document.getElementById("resultDivContainer").classList.add("hidden");
  document.getElementById("reset").setAttribute("disabled", "true");
  document.getElementById("inline-view").classList.add("hidden");
  document.getElementById("list-view").classList.add("hidden");
  document.getElementById("columns-view").classList.add("hidden");
  document.getElementById("columns-view").removeAttribute("disabled");
  document.getElementById("inline-view").removeAttribute("disabled");
  document.getElementById("list-view").removeAttribute("disabled");
  currentDisplayFunction = displayResultInLine;
}

// Set up event listeners when the window loads.
window.addEventListener("load", function () {
  // Add event listener to the form.
  document.getElementById("inputForm").addEventListener("submit", getResult);

  // Add event listener to the reset button.
  document.getElementById("reset").addEventListener("click", resetResult);

  // Add event listeners to the view buttons.
  document.getElementById("inline-view").addEventListener("click", function () {
    currentDisplayFunction = displayResultInLine;
    currentDisplayFunction(resultArray);
    displayingIcons(currentDisplayFunction);
  });

  document.getElementById("list-view").addEventListener("click", function () {
    currentDisplayFunction = displayResultInList;
    currentDisplayFunction(resultArray);
    displayingIcons(currentDisplayFunction);
  });

  document.getElementById("columns-view").addEventListener("click", function () {
    currentDisplayFunction = displayResultInColumns;
    currentDisplayFunction(resultArray);
    displayingIcons(currentDisplayFunction);
  });
});
