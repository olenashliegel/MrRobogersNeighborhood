function isStringNumeric(inputText) {
  const nonDigitRegex = /\D/;
  return (!nonDigitRegex.test(inputText.trim()) && inputText.length > 0);
}

function getNumberFromInputString(inputText) {
  if (isStringNumeric(inputText)) {
    return parseInt(inputText.trim())
  } else
    return null
}


// const inputTextTest1 = "4204";
// console.log(isStringNumeric(inputTextTest1));
// const inputTextTest2 = "42a04";
// console.log(isStringNumeric(inputTextTest2));
// const inputTextTest3 = "";
// console.log(isStringNumeric(inputTextTest3));
// const inputTextTest4 = " 4204 ";
// console.log(isStringNumeric(inputTextTest4));

const inputTextTest5 = "43";
console.log(getNumberFromInputString(inputTextTest5));
const inputTextTest6 = "43as";
console.log(getNumberFromInputString(inputTextTest6));
const inputTextTest7 = " 432 "
console.log(getNumberFromInputString(inputTextTest7));
const inputTextTest8 = "013"
console.log(getNumberFromInputString(inputTextTest8));
const inputTextTest9 = ""
console.log(getNumberFromInputString(inputTextTest9));
