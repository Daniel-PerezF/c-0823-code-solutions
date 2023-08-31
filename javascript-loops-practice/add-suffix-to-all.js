/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArr = words;
  for (let i = 0; i < words.length; i++) {
    newArr[i] = newArr[i] + suffix;
  }
  return newArr;
}
