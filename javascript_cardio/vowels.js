function vowels(str) {
  // let count = 0;
  // const checker = ['a','e','o','i','u'];

  // for(let char of str.toLowerCase()) {
  //   if(checker.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;

  const matches = str.match(/[aioue]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels('Which programming languages do you like'))