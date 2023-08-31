/* exported initial */
function initial(array) {
  const newArr = [];
  let counter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    newArr[counter] = array[i];
    counter++;
  }
  return newArr;
}
