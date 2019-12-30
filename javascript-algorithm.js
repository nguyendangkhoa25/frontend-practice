//=================1. Reverse a String(Đảo chuỗi)=========================//
function reverseString(str) {
  //Convert a string to an array
  let strArr = str.split("");
  let reverseStr = "";
  for(let i = strArr.length -1; i >= 0; i--){
    reverseStr += strArr[i];
  }
  return reverseStr;
}
//Testing
reverseString("Hello");


//=================2. Factorialize a number(Giai thừa)=========================//
function factorialize(num) {
  let facNum = 1;
  for(let i = 1; i<= num; i++){
    facNum *= i;
  }
  return facNum;
}
//Testing
factorialize(5);


//================3. Convert Celsius to Fahrenheit(Convert độ C sang độ F) ====//
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
//Testing
convertToF(30);

//================4. Find the Longest Word in a String =========================//
function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";
  for(let i = 0; i < strArr.length; i++){
    if(longestWord.length < strArr[i].length){
      longestWord = strArr[i];
    }
  }
  return longestWord.length;
}
//Testing
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//================5. Return Largest Numbers in Arrays =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
function largestOfFour(arr) {
  let arrResult = [];
  for(let i = 0; i < arr.length; i++){
    let childArr = arr[i];
    let bigestNum = childArr[0];
    for(let j =0; j < childArr.length; j++){
      if(childArr[j] >= bigestNum){
        bigestNum = childArr[j];
      }
    }
    arrResult.push(bigestNum);
  }
  return arrResult;
}



//================5.  =========================//
