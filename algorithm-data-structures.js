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
//=================2.  =========================//
//=================3.  =========================//
//=================4.  =========================//
//=================5.  =========================//
//=================6.  =========================//
