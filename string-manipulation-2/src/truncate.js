/* exported truncate */
function truncate(length, string) {
  if (length > string.length) {
    return string + '...';
  }
  if (string.length > length) {
    return string.slice(0, length) + '...';
  }
  if (string.length < length) {
    return '...';
  }
}
