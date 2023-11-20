# Mr. Roboger's Neighborhood

#### By **Olena Shliegel**

#### This is the MVP version of a Mr. Roboger's Neighborhood. This web application generates a list of values from 0 up to a user-inputted number with unique substitutions. For any number containing 1, 2, or 3, the application replaces it with "Beep!", "Boop!", or "Won't you be my neighbor?" respectively, adding a playful twist to number sequences. The working version of the site can be accessed using the following link:  
#### [future link](https://)

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This project was created using HTML, CSS, and JavaScript technologies.

## Setup/Installation Requirements

* Clone the repository to a new directory: `$ git clone https://github.com/olenashliegel/MrRobogersNeighborhood.git {new_repo_name}`
* Navigate to the new repository: `$ cd {path_to_new_repo_name}`
* Open with an editor (e.g., VSCode): `$ code .`
* Right-click on `index.html` and select `Open with Live Server`
* Test data can be found by path `js/testdata.js`.

## Tests
```
##Describe: isStringNumeric()
Test1: "It should return true when input string contains only number"
Code: 
const inputTextTest1 = "4204"
isStringNumeric(inputTextTest1);
Expected Output: true  

Test2: "It should return false when input string contains non numeric symbols"
Code: 
const inputTextTest2 = "42a04"
isStringNumeric(inputTextTest2);
Expected Output: false

Test3: "It should return false when input string is empty"
Code: 
const inputTextTest3 = ""
isStringNumeric(inputTextTest3);
Expected Output: false

Test4: "It should return true when input string contains only numbers and spaces in the beginning and in the end of string"
Code: 
const inputTextTest4 = " 4204 "
isStringNumeric(inputTextTest4);
Expected Output: true

Describe getNumberFromInputString()
Test5: "It should return number from input string"
Code: 
const inputTextTest5 = "43"
getNumberFromInputString(inputTextTest5);
Expected Output: 43

Test6: "It should return null if string contains non numeric symbols"
Code: 
const inputTextTest6 = "43as"
getNumberFromInputString(inputTextTest6);
Expected Output: null

Test7: "It should return number from input string with empty spaces in the begging and ending"
Code: 
const inputTextTest7 = " 432 "
getNumberFromInputString(inputTextTest7);
Expected Output: 432

Test8: "It should return number from input string if input number starts from  0"
Code: 
const inputTextTest8 = "013"
getNumberFromInputString(inputTextTest8);
Expected Output: 13

Test9: "It should return null if string is empty"
Code: 
const inputTextTest9 = ""
getNumberFromInputString(inputTextTest9);
Expected Output: null

Describe creatingStringArray()
Test10: "It should return string array  of values from 0 to the number"
Code: 
const inputNumberTest10 = 3
creatingStringArray (inputNumberTest10);
Expected Output: ["0", "1", "2", "3"]

Test11: "It should return string array  with one value 0 if number is 0"
Code: 
const inputNumberTest11 = 0
creatingStringArray (inputNumberTest11);
Expected Output: ["0"]

Describe substituteArrayElement()
Test12: "It should return string array  with one value 0 if number is 0"
Code: 
const inputArrayTest12 = ["0"]
substituteArrayElement (inputArrayTest12);
Expected Output: ["0"]

Test13: "It should substitute string array  with 'Beep' for numbers that contain a 1"
Code: 
const inputArrayTest13 = ["0", "1"]
substituteArrayElement (inputArrayTest13);
Expected Output: ["0", "Beep!"]

Test14: "It should substitute string array  with 'Boop' for numbers that contain a 2"
Code: 
const inputArrayTest14 = ["0", "1", "2"]
substituteArrayElement (inputArrayTest14);
Expected Output: ["0", "Beep!", "Boop!"]

Test15: "It should substitute string array  with 'Won't you be my neighbor?' for numbers that contain a 3"
Code: 
const inputArrayTest15 = ["0", "1", "2", "3", "4", "5"]
substituteArrayElement (inputArrayTest15);
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test16: "It should substitute string array from least to most important"
Code: 
const inputArrayTest16 = ["10", "12", "13", "23"]
substituteArrayElement (inputArrayTest16);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?"]

```

## Known Bugs

* Displaying h2 is not vertically aligned when result is displayed in columns

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal with the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Copyright (c) 11/20/2023 Olena Shliegel
