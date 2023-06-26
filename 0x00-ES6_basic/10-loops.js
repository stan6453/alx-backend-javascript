export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const item of array) {
    array2.push(appendString + item);
  }

  return array2;
}
