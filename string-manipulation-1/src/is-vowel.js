/* exported isVowel */
function isVowel(charachter) {
  const vowel = 'aeiouAEIOU';
  for (let i = 0; i < vowel.length; i++) {
    if (charachter === vowel[i]) {
      return true;
    }
  }
  return false;
}
