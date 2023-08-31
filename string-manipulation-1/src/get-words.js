/* exported getWords */
function getWords(string) {
  const newArr = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return newArr;
  }
}
