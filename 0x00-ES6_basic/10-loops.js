export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    array.push(appendString + item);
    array.shift();
  }

  return array;
}
