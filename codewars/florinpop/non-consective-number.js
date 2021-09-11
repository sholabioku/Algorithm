// Find the first element of an array that is not consective
// example [1,2,3,4,6,7,8] --> 6

function firstNonConsective(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if(curr + 1 !== next) {
      return next;
    }
  }

}

console.log(firstNonConsective([1,2,3,4,5,6,7,8, 12]))