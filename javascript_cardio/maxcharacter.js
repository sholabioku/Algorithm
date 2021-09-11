// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(char => {
    if(charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  for(char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;

  
}

console.log(maxCharacter('javaascriptttttttt'))