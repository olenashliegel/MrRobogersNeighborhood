const inputTextTest1 = "4204";
console.log(isStringNumeric(inputTextTest1));
const inputTextTest2 = "42a04";
console.log(isStringNumeric(inputTextTest2));
const inputTextTest3 = "";
console.log(isStringNumeric(inputTextTest3));
const inputTextTest4 = " 4204 ";
console.log(isStringNumeric(inputTextTest4));

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

const inputNumberTest10 = 114;
console.log(creatingStringArray(inputNumberTest10));
const inputNumberTest11 = 0;
console.log(creatingStringArray(inputNumberTest11));

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


