/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length==0)return true;
  str=str.toLowerCase().replace(/[^a-z0-9]/g,'');
  let newstr=str.toLowerCase().split('').reverse().join('');
 
  if(str===newstr){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
