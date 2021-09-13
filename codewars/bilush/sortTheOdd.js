function sortArray(array) {
  let odd = array.filter(v => v % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}

console.log(sortArray(['1', '4', '7', '3', '6', '5']))