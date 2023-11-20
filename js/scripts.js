// Checks if the input text is a numeric string.
function isStringNumeric(inputText) {
  // Regular expression to match any non-digit character.
  const nonDigitRegex = /\D/;
  return (!nonDigitRegex.test(inputText.trim()) && inputText.length > 0);
}

// Converts a valid numeric string to an integer, or returns null for invalid inputs.
function getNumberFromInputString(inputText) {
  if (isStringNumeric(inputText)) {
    return parseInt(inputText.trim())
  } else
    return null
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
function displayErrorMessage() {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = '';
  const errorMessage = document.createElement("h2");
  errorMessage.textContent = "Please enter a valid number. Only digits are allowed.";
  resultDiv.appendChild(errorMessage);
}

function displayResultInLine(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = '';

  const resultP = document.createElement("p");
  let resultString = "";
  resultArray.forEach(function (element) {
    if (isStringNumeric(element)) {
      resultString += element + ", ";
    } else {
      resultString += `"${element}"` + ", ";
    }
  });

  resultP.textContent = resultString;
  resultDiv.appendChild(resultP);
}

function displayResultInList(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = '';

  const resultUl = document.createElement("ul");
  resultDiv.appendChild(resultUl);

  resultArray.forEach(function (element) {
    const resultLi = document.createElement("li");
    if (isStringNumeric(element)) {
      resultLi.textContent = element;
      resultUl.appendChild(resultLi);
    } else {
      resultLi.textContent = `"${element}"`;
      resultUl.appendChild(resultLi);
    }
  });
}

function displayResultInColumns(resultArray) {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = '';
  if (resultArray.length <= 10) {
    displayResultInList(resultArray);
  } else {

    resultDiv.setAttribute("class", "columns");
    const resultDivFirstColumn = document.createElement("div");
    const resultDivSecondColumn = document.createElement("div");
    resultDiv.append(resultDivFirstColumn, resultDivSecondColumn);

    const resultFirstUl = document.createElement("ul");
    const resultSecondUl = document.createElement("ul");
    resultDivFirstColumn.appendChild(resultFirstUl);
    for (let i = 0; i < resultArray.length / 2; i++) {
      const resultLi = document.createElement("li");
      if (isStringNumeric(resultArray[i])) {
        resultLi.textContent = resultArray[i];
        resultFirstUl.appendChild(resultLi);
      } else {
        resultLi.textContent = `"${resultArray[i]}"`;
        resultFirstUl.appendChild(resultLi);
      }
    }
    resultDivSecondColumn.appendChild(resultSecondUl);

    for (let i = (resultArray.length / 2).toFixed(); i < resultArray.length; i++) {
      const resultLi = document.createElement("li");
      if (isStringNumeric(resultArray[i])) {
        resultLi.textContent = resultArray[i];
        resultSecondUl.appendChild(resultLi);
      } else {
        resultLi.textContent = `"${resultArray[i]}"`;
        resultSecondUl.appendChild(resultLi);
      }
    }
  }
}

function getResult(e) {
  e.preventDefault();
  let resultArray = [];
  const inputNumber = document.getElementById("inputNumber").value;
  if (getNumberFromInputString(inputNumber) === null) {
    displayErrorMessage();
  }
  else {
    resultArray = substituteArrayElement(creatingStringArray(inputNumber));
    console.log(resultArray);
    // displayResultInLine(resultArray);
    // displayResultInList(resultArray);
    displayResultInColumns(resultArray);
  }
}


window.addEventListener("load", function () {
  document.getElementById("inputForm").addEventListener("submit", getResult);
});


// const inputTextTest1 = "4204";
// console.log(isStringNumeric(inputTextTest1));
// const inputTextTest2 = "42a04";
// console.log(isStringNumeric(inputTextTest2));
// const inputTextTest3 = "";
// console.log(isStringNumeric(inputTextTest3));
// const inputTextTest4 = " 4204 ";
// console.log(isStringNumeric(inputTextTest4));

// const inputTextTest5 = "43";
// console.log(getNumberFromInputString(inputTextTest5));
// const inputTextTest6 = "43as";
// console.log(getNumberFromInputString(inputTextTest6));
// const inputTextTest7 = " 432 "
// console.log(getNumberFromInputString(inputTextTest7));
// const inputTextTest8 = "013"
// console.log(getNumberFromInputString(inputTextTest8));
// const inputTextTest9 = ""
// console.log(getNumberFromInputString(inputTextTest9));

// const inputNumberTest10 = 114;
// console.log(creatingStringArray(inputNumberTest10));
// const inputNumberTest11 = 0;
// console.log(creatingStringArray(inputNumberTest11));

// const inputArrayTest12 = ["0"];
// console.log(substituteArrayElement(inputArrayTest12));
// const inputArrayTest13 = ["0", "1"];
// console.log(substituteArrayElement(inputArrayTest13));
// const inputArrayTest14 = ["0", "1", "2"];
// console.log(substituteArrayElement(inputArrayTest14));
// const inputArrayTest15 = ["0", "1", "2", "3", "4", "5"];
// console.log(substituteArrayElement(inputArrayTest15));
// const inputArrayTest16 = ["10", "12", "13", "23"];
// console.log(substituteArrayElement(inputArrayTest16));


