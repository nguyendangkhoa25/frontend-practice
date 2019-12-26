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


//=================2. Factorialize a number(Giai thừa)=========================//
function factorialize(num) {
  let facNum = 1;
  for(let i = 1; i<= num; i++){
    facNum *= i;
  }
  return facNum;
}


//================3. Convert Celsius to Fahrenheit(Convert độ C sang độ F) ====//
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
