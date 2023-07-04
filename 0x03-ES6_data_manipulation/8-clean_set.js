export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
