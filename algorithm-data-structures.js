/**
All the algorithm and data structures javascript challenges on the freeCodeCamp website will be stored right here.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/
**/
//=================1. JavaScript Algorithms and Data Structures Projects: Palindrome Checker =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
function palindrome(str) {
  //in the left hand side we just remove all the capital letter
  //in the right hand side we remove all the capital letters  then reverse the string
  return str.replace(/[\W_]/g, "").toLowerCase() === str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
}
//=================2. JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
function convertToRoman(num) {
     var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++){
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

convertToRoman(36);
//=================3. JavaScript Algorithms and Data Structures Projects: Caesars Cipher =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) { // LBH QVQ VG!

let shift = {
    'A' : 'N',
    'B' : 'O',
    'C' : 'P',
    'D' : 'Q',
    'E' : 'R',
    'F' : 'S',
    'G' : 'T',
    'H' : 'U',
    'I' : 'V',
    'J' : 'W',
    'K' : 'X',
    'L' : 'Y',
    'M' : 'Z',
    'N' : 'A',
    'O' : 'B',
    'P' : 'C',
    'Q' : 'D',
    'R' : 'E',
    'S' : 'F',
    'T' : 'G',
    'U' : 'H',
    'V' : 'I',
    'W' : 'J',
    'X' : 'K',
    'Y' : 'L',
    'Z' : 'M'
  };

//letter pattern
let letters = /^[A-Z]+$/;
let resultStr = "";
for(let i = 0; i< str.length; i++){
  let before = str[i];
  if(before.match(letters)){
    let after = shift[before];
    resultStr = resultStr + after;
  } else{
    resultStr = resultStr + before;
  }
}
  return resultStr;
}

// Change the inputs below to test
rot13("SERR YBIR?");
//=================4. JavaScript Algorithms and Data Structures Projects: Telephone Number Validator =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck(str) {
  //^ denotes the beginning of the string.
  //(1\s?)? allows for “1” or “1 ” if there is one.
  //\d{n} checks for exactly n number of digits so \d{3} checks for three digits.
  //x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
  //[\s\-]? checks for spaces or dashes between the groups of digits.
  //$ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
  //Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.
  let pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if(str.match(pattern)){
    console.log(true);
    return true;
  } 
  console.log(false);
  return false;
}
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1(555)555-5555");
//=================5. JavaScript Algorithms and Data Structures Projects: Cash Register =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

