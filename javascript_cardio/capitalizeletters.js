// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i =0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1)
  // }

  // return strArr.join(' ');

  return str.replace(/\b[a-z]/gi, char => {
    return char.toUpperCase();
  })

}

console.log(capitalizeLetters('i love javascript'))