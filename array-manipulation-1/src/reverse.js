/* exported reverse */
function reverse(array) {
  const newArr = [];
  const reverse = array.length - 1;
  for (let i = reverse; i >= 0; i--) {
    const value = array[i];
    newArr.push(value);
  }
  return newArr;
}
