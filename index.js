
function printNumber(n) {
  if(n === 0) {
    return;
  }
  console.log(n)
  printNumber(n - 1);
}

console.log(printNumber(10))