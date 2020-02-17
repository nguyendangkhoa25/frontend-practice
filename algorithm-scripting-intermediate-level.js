/**
All the intermediate algorithm javascript challenges on the freeCodeCamp website will be stored right here.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/
**/
//=================1. Sum All Numbers in a Range =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
function sumAll(arr) {
  //1. First find the max and mix number
  let min = arr[0] <= arr[1] ? arr[0] : arr[1];
  let max = arr[0] > arr[1] ? arr[0] : arr[1];
  //Another way to find max and min
  //min = Math.min(arr[0], arr[1])
  //max = Math.max(arr[0], arr[1])
  let total = 0;
  
  //2. Loop from mix to max and add to the total
  for(let i = min; i<=max; i+=1){
    total += i;
  }
  return total;
}
console.log(sumAll([1, 4]));

//=================2. Diff Two Arrays =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  //1. Using concat function to mix two array into one
  const concatArr = arr1.concat(arr2);
  console.log(concatArr);
  //2. Filter the element which does not include in both arr
  newArr = concatArr.filter(obj => !arr1.includes(obj) || !arr2.includes(obj));
  console.log(newArr);
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//=================3. Seek and Destroy =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
function destroyer(arr) {
  //1. Find all the rest arguments of the function
  let args = [...arguments].slice(1);
  console.log(args);
  let finalArr = [];
  //2. Loop throught the array then push the matched item into a new array
//  for(let i = 0; i< arr.length; i++){
//    let value = arr[i];
//    if(!args.includes(value)){
//      finalArr.push(value)
//    }
//  }
  //2. Filter out all the matched elements this works same with the above
  finalArr = arr.filter(obj => !args.includes(obj))
  console.log(finalArr);
  return finalArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//=================4. Wherefore art thou =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // 1. Get the all properties name from the second parameter
  let proNames = Object.getOwnPropertyNames(source);
  //2. Filter the array
  arr = collection.filter(obj => {
    for(let i = 0; i< proNames.length; i++){
      let proName = proNames[i];
      let proVal = source[proName];
      //3. Find that the object does not own the property or it's value is not equal to will be remove
      if(!obj.hasOwnProperty(proName) || obj[proName] !== proVal){
        return false;
      }
    }
    return true;
  });
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

//=================5. Spinal Tap Case =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
  // Replace the Capital letter in the word by space. IsHereRightNow => Is Here Right Now
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  console.log(str);
  //Replace the space( ) or underscore(_) by hyphen(-)
  return str.toLowerCase().replace(/\ |\_/g, '-')
}

spinalCase('AllThe-small Things IsHereRightNow');
//=================6. Intermediate Algorithm Scripting: Pig Latin =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
  let vowel = str.match(/u|e|o|a|i/);
  //In case we could not find any vowel letter in the word
  if(vowel === null){
    return str.concat("ay");
  }else{
    let vowelIndex = vowel.index;
    //In case the first word is a vowel letter
    if(vowelIndex === 0){
      return str.concat("way");
    }else{
      return splitValue(str, vowelIndex); 
    }
  }
  return str;
}

// Reverse the string by the index and then concat with "ay
function splitValue(str, index) {
    return str.substring(index).concat(str.substring(0, index)).concat("ay");
}

translatePigLatin("paragraphs");

//=================7. Intermediate Algorithm Scripting: Search and Replace =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function myReplace(str, before, after) {
  //In case the first letter of before is Upper we nee to upper case after also
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace
  return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//=================8. Intermediate Algorithm Scripting: DNA Pairing =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
function pairElement(str) {
  let paired = [];  
  //Let define a search function and push to the array if the char is match
  let search = function(char){
    switch(char) {
      case "A": 
        paired.push(["A", "T"]);
        break;
      case "T": 
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  }
  //Loop through each letter of the string
  for(let i =0; i<= str.length; i++){
    search(str[i])
  }
  return paired;
}

pairElement("GCGCCGGGG");
//=================9. Intermediate Algorithm Scripting: Missing letters =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
function fearNotLetter(str) {
  //Loop through the string and compare the char code of the char with the next char
  for(let i = 0; i<= str.length; i++){
    if(str.charCodeAt(i + 1) - str.charCodeAt(i) >= 2){
        let missingCode = str.charCodeAt(i) + 1;
        console.log("Missing char code: " + missingCode)
        return String.fromCharCode(missingCode);
    }
  }
  return undefined;
}

fearNotLetter("abce");
//=================10. Intermediate Algorithm Scripting: Sorted Union =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(arr) {
  let firstArr = arguments[0];
  let args = Array.from(arguments);
  //Loop through the arguments
  for(let i = 1; i < arguments.length; i++){
    let arrSub = arguments[i];
    let maxVal = Math.max(...firstArr);
    //Loop through of each Array and add to the array
    for(let j = 0; j <= arrSub.length; j++){
      if(maxVal < arrSub[j]){
        console.log("Found Val: " + arrSub[j]);
        firstArr.push(arrSub[j]);
      }
    }
  }
  return firstArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//=================11. Intermediate Algorithm Scripting: Convert HTML Entities =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
  //Define the list of HTML entities
  let multiple = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };

  //Loop through the multiple obj and replace the string
  for(let char in multiple){
    let before = char;
    let after = multiple[char];
    var pattern = new RegExp(before, 'g');
    str = str.replace(pattern, after);
  }
  return str;
}

convertHTML("Dolce & Gabbana");
//=================12. Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
  let fiboArr = [];
  let preNum = 0;
  let curNum = 1;
  //Loop to find the fibonacci
  while (curNum <= num) {
    //Find the odd fibonacci then push into an array
      if(curNum % 2 !== 0){
        fiboArr.push(curNum);
      }
      curNum = preNum + curNum;
      preNum = curNum - preNum;
};

  //Sum the array of odd fibonacci
  let result = fiboArr.reduce((a, b) => a + b, 0)
  console.log(fiboArr);
  return result;
}
sumFibs(75024);
//=================13. Intermediate Algorithm Scripting: Sum All PrimesPassed =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
function sumPrimes(num) {
  let primeArr = [];
  //Loop to find the prime number then add to the array
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      primeArr.push(i);
    }
  }

  //Return the sum of the array
  return primeArr.reduce((a, b) => a + b, 0);
}

//The function to check that if the number is prime number of not
function isPrime(num){
  if(num === 1 || num === 2){
    return true;
  }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
sumPrimes(977);

//=================14. Intermediate Algorithm Scripting: Smallest Common Multiple =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
  //Find the min and max number of the array
  let minNumber = Math.min.apply(null, arr);
  let maxNumber = Math.max.apply(null, arr);
  let lcmNum = minNumber;
  while(minNumber <= maxNumber){
    lcmNum = lcmFunc(lcmNum, minNumber);
    console.log("lcmNum: "+ lcmNum);
    console.log("minNumber: "+ minNumber);
    minNumber += 1;
  }
  return lcmNum;
}

//Tim uoc so chung nho nhat cua 2 so
let gcdFunc = (num1, num2) => {
  
  //Loop till both numbers are not equal
  while(num1 != num2){
    
    //check if num1 > num2
    if(num1 > num2){
      //Subtract num2 from num1
      num1 = num1 - num2;
    }else{
      //Subtract num1 from num2
      num2 = num2 - num1;
    }
  }
  
  return num2;
}

//Tim boi so chung nho nhat cua 2 so
let lcmFunc = (n1, n2) => {
  //Find the gcd first 
  let gcdNum = gcdFunc(n1, n2);

  //then calculate the lcm
  return (n1 * n2) / gcdNum;
}
smallestCommons([1,13]);

//=================15. Intermediate Algorithm Scripting: Drop it =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
  let resultArr = [];
  let founded = false;
  for(let i = 0; i< arr.length; i++){
    console.log("arr[" + i + "]: " + arr[i]);
    if(func(arr[i]) === true || founded === true){
      resultArr.push(arr[i]);
      founded = true;
    }
  }
  console.log(resultArr);
  return resultArr;
}

//dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
//=================16. Intermediate Algorithm Scripting: Steamroller =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let resultArr = [];
  function flatten(arr){
      arr.forEach(function(item){
        if(!Array.isArray(item)){
          resultArr.push(item)
        } else{
          flatten(item);
        }
      });
  }
  flatten(arr);
  console.log(resultArr);
  return resultArr;
}

steamrollArray([[["a"]], [["b"]]]);
//=================17. Intermediate Algorithm Scripting: Binary Agents =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
function binaryAgent(str) {
  let arr = str.split(" ");
  let resultString = "";
  for(let i = 0; i< arr.length; i++){
    //Convert binary into charcode and then convert charcode into string
    resultString += String.fromCharCode(parseInt(arr[i], 2));
  }
  console.log(resultString);
  return resultString;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//=================18. Intermediate Algorithm Scripting: Everything Be True =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
function truthCheck(collection, pre) {

  for(let i = 0; i< collection.length; i++){
    let obj = collection[i];
    let val = obj[pre];
    //Check if the value is falsy then return false
    if(!val){
      return false;
    }
  }
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

//=================19. Intermediate Algorithm Scripting: Arguments Optional =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}

addTogether(2)(3);

//=================20. Intermediate Algorithm Scripting: Make a Person =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  var arr = fullName.split(' ');

  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return fullName;
  };
  this.setFullName = function(firstAndLast){
    fullName = firstAndLast;
    arr = fullName.split(' ');
  }

  this.getFirstName = function(){
    return arr[0];
  }
  this.setFirstName = function(firstName){
    arr[0] = firstName;
    fullName = arr.join(' ');
  }

  this.getLastName = function(){
    return arr[1];
  }
  this.setLastName = function(lastName){
    arr[1] = lastName;
    fullName = arr.join(' ');
  }
};
//=================21. Intermediate Algorithm Scripting: Map the Debris =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var prop in arr) {
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    //Delete a property and then add an new property
    delete arr[prop].avgAlt;
    arr[prop].orbitalPeriod = orbitalPer;
  }
  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

