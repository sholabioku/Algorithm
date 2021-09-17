// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// function isAnagram (str1, str2) {
//   return formatStr(str1) === formatStr(str2)
// }

// function formatStr(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }


function isAnagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

console.log(isAnagram('elbow', 'belowaaa'));