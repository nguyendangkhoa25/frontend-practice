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

//=================11.  =========================//
//=================12.  =========================//
//=================13.  =========================//
//=================14.  =========================//
//=================15.  =========================//
//=================16.  =========================//
//=================17.  =========================//
//=================18.  =========================//
//=================19.  =========================//
