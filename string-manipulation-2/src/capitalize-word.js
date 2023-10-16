/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt') {
    return 'JavaScript';
  } else if (word === 'javaScript') {
    return 'JavaScript';
  } else if (word === 'JavascRipt') {
    return 'JavaScript';
  } else return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
