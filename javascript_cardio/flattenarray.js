// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.reduce((a, b) => a.concat(b))
  // return [].concat(...arrays)
  // return arrays.flat();

}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))