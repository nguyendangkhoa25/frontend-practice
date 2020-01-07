/**
 This is all the excersire from free code camp for the basic algorithm
 https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/
**/
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



//================6. Truncate a String =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length && num > 3){
    return str.slice(0, num);
  }else if(num > 3){
    return str.slice(0, num) + '...';
  }else{
    return str.slice(0, num)+ '...';
  }
}
truncateString("Peter Piper picked a peck of pickled peppers", 11)
//================7. Finders Keepers =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
function findElement(arr, func) {
  for(let i = 0; i< arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//================8. Boo who =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

//================9. Title Case a Sentence =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
function titleCase(str) {
  str = str.toLowerCase();
  let arrStr = str.split(' ');
  for(let i = 0; i < arrStr.length; i ++){
    //Upper case the first letter of each word
    arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1); 
  }
  //Join the array to string
  return arrStr.join(' ');
}
//================10.  Slice and Splice=========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let someSlice = arr1.slice(0, arr1.length);
  arr2.splice(n, 0, ...someSlice);
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//================11. Falsy Bouncer =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for(let i =0; i< arr.length; i++){
    //Check a falsy value by this condition
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
//================12. Where do I Belong =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
function getIndexToIns(arr, num) {
  // Sorted the array by ES6
  arr.sort((a,b) => a-b);
  let foundIndex = 0;
  for(let i =0; i< arr.length; i++){
    if(arr[i] >= num){
      foundIndex = i;
      break;
    }
    if(i == arr.length-1){
      foundIndex = arr.length;
    }
  }
  return foundIndex;
}

getIndexToIns([2, 5, 10], 15);
//================13. Mutations =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
function mutation(arr) {
  let strFirst = arr[0].toUpperCase();
  let arrSecond = arr[1].split('');
  //loop through the second word then check for each one
  for(let i = 0; i< arrSecond.length; i++){
    if(!strFirst.includes(arrSecond[i].toUpperCase())){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
//================14. Chunky Monkey =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
function chunkArrayInGroups(arr, size) {
  let arrResult = [];
  //loop through the array then get the value from start to the size
  for(let i =0; i< arr.length; i += size){
    arrResult.push(arr.slice(i, i + size));
  }
  return arrResult;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



