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

//=================6.  =========================//
//=================7.  =========================//
//=================8.  =========================//
//=================9.  =========================//
