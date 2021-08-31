// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revStr = int.toString().split('').reverse().join('');

  return parseInt(revStr) * Math.sign(int)
}

console.log(reverseInt(+521))