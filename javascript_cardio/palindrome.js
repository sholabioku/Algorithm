// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // const revStr = [...str].reverse().join('');

  // const revStr = str.split('').reverse().join('');

  // return revStr === str;

  return str.split('').every((char, i) => {
    return char === str[str.length -i -1]
  })
}

console.log(isPalindrome('racecar'))