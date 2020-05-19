// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let array = str.split("");
  let palindrome = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[array.length - index - 1]) palindrome = true;
    return palindrome;
  }
}
module.exports = palindrome;
