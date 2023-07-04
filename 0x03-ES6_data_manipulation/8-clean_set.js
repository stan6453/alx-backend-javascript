export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  const arr = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      arr.push(item.slice(startString.length));
    }
  }

  return arr.join('-');
}
