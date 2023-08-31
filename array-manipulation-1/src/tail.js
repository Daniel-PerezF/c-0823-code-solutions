/* exported tail */
function tail(array) {
  const newArr = [];
  let counter = 0;
  for (let i = 1; i < array.length; i++) {
    newArr[counter] = array[i];
    counter++;
  }
  return newArr;
}
