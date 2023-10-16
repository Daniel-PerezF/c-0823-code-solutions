/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newArr = string.split('');

  const swap = newArr[firstIndex];
  newArr[firstIndex] = newArr[secondIndex];
  newArr[secondIndex] = swap;

  return newArr.join('');
}
