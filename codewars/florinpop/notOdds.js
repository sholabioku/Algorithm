// Write a small function that returns the valuee of array that are not odd

function noOdds (values){
  return values.filter(val => val % 2 === 0)
}

console.log(noOdds([0,1,2,3,4,5,6]))