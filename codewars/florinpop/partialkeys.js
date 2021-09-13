function partialKeys(obj) {
  // 1. Loop over the properties of the object.
  // 2. Create all the substring properties on the object and assign them to the value.

  const newObj = {};
  Object.keys(obj).forEach(key => {
    for (let i = 0; i < key.length; i++) {
      const newKey = key.substring(0, i + 1)
      newObj[newKey] = obj[key]
    }
  })

  return newObj;
}

console.log(partialKeys({aa: 1, b: 2, ccc: 3}))