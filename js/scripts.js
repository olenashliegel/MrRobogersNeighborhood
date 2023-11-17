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

