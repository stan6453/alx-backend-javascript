export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  return ([...set].reduce((sum, val) => sum + (val.startsWith(startString) ? `-${val.slice(startString.length)}` : ''), '')).slice(1);
}
