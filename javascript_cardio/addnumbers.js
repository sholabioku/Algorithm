// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addNumbers() {
  // let args = Array.from(arguments)
  // let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i]
  // }

  // return total;

// }


// function  addNumbers() {
//   let args = Array.from(arguments)
//   let total = 0;
//   args.forEach(numb => {
//     return total += numb;
//   })
//   return total;
// }

// function addNumbers(...numbers) {
//   let total = 0;
//   numbers.forEach(numb => {
//     return total += numb
//   })

//   return total;
// }

function addNumbers(...numbers){
  return numbers.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}

console.log(addNumbers(2,5,6,7));