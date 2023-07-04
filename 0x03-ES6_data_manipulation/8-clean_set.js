export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  return ([...set].reduce((sum, val) => sum + (val.startsWith(startString) && startString !== '' ? `-${val.slice(startString.length)}` : ''), '')).slice(1);
}
