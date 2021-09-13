function spinWord(sentence) {
  return sentence.split(' ').map(word => word.length >= 5 ? revStr(word) : word).join(' ')
}

function revStr(str) {
  return str.split('').reverse().join('');
}

console.log(spinWord('I love Nigeria as my country'))