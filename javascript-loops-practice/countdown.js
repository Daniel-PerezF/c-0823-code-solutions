/* exported countdown */
function countdown(number) {
  const numArr = [];
  for (let i = number; i >= 0; i--) {
    numArr.push(i);
  }
  return numArr;
}
