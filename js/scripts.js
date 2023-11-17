function checkingInputText(inputText) {
  const nonNumericRegex = /\D/;
  return (!nonNumericRegex.test(inputText) && inputText.length > 0);
}


const inputTextTest1 = "4204";
console.log(checkingInputText(inputTextTest1));

const inputTextTest2 = "42a04";
console.log(checkingInputText(inputTextTest2));

const inputTextTest3 = "";
console.log(checkingInputText(inputTextTest3));