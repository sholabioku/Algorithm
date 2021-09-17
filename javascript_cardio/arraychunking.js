 // CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray (arr, len) {
  // const chunkedArr = [];

  // let i = 0;

  // while(i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));

  //   i += len;
  // }

  // return chunkedArr;

  const chunkedArr = [];
  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];
    if(!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  })

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));