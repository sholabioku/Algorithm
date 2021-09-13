function findShort(s){
  const wordArr = s.split(' ').sort((a, b) => a.length - b.length)
  return wordArr[0].length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))