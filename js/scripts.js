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

const inputArrayTest12 = ["0"];
console.log(substituteArrayElement(inputArrayTest12));
const inputArrayTest13 = ["0", "1"];
console.log(substituteArrayElement(inputArrayTest13));
const inputArrayTest14 = ["0", "1", "2"];
console.log(substituteArrayElement(inputArrayTest14));
const inputArrayTest15 = ["0", "1", "2", "3", "4", "5"];
console.log(substituteArrayElement(inputArrayTest15));
const inputArrayTest16 = ["10", "12", "13", "23"];
console.log(substituteArrayElement(inputArrayTest16));


