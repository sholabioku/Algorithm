// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  const sortedArr = wordArr.sort((a, b) => {
    return b.length - a.length
  })
  
  const longestWordArr = sortedArr.filter(word => {
    return word.length === sortedArr[0].length
  })

  if(longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

console.log(longestWord('Hi there, my name is Lukman bilush'))