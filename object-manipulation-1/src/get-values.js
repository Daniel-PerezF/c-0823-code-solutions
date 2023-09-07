/* exported getValues */
function getValues(object) {
  const newArr = [];
  for (const value in object) {
    newArr.push(object[value]);
  }
  return newArr;
}
