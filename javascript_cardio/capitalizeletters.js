// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i =0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1)
  // }

  // return strArr.join(' ');

  // return str.replace(/\b[a-z]/gi, char => {
  //   return char.toUpperCase();
  // })

  // const words = [];
  // for (let word of str.split(' ')) {
  //   words.push(word[0].toUpperCase() + word.slice(1))
  // }

  // return words.join(' ')

  let result = str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    if(str[i - 1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i]
    }
  }
  return result;

}

console.log(capitalizeLetters('i love javascript'))