/* exported toObject */
function toObject(keyValuePair) {
  const newObj = {};
  const first = keyValuePair[0];
  const last = keyValuePair[1];
  newObj[first] = last;
  return newObj;
}
