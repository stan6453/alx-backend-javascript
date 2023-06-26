export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    array.push(appendString + value);
    array.shift();
  }

  return array;
}
