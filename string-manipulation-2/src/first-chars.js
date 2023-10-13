/* exported firstChars */
function firstChars(length, string) {
  if (length >= 0 && length <= string.length) {
    return string.slice(0, length);
  } else {
    return string;
  }
}
