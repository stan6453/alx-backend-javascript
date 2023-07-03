export default function updateUniqueItems(groceriesList) {
  groceriesList.forEach((value, key) => value === 1 ? groceriesList.set(key, 100) : '');
}