/* exported getKeys */
function getKeys(object) {
  const newArr = [];
  for (const keys in object) {
    newArr.push(keys);
  }
  return newArr;
}
