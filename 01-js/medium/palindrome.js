/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length === 0) return true
  let start_ptr = 0
  let end_ptr = str.length - 1

  while(start_ptr <= end_ptr){
    if(str.charAt(start_ptr) !== str.charAt(end_ptr)){
      return  false
    }
    start_ptr += 1
    end_ptr -= 1
  }
  return true;
}

console.log(isPalindrome("harah"))
console.log(isPalindrome("harrah"))
console.log(isPalindrome("cat"))
console.log(isPalindrome("t"))
console.log(isPalindrome(""))

module.exports = isPalindrome;
