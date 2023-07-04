export default function cleanSet(set, startString) {
  return ([...set].reduce((sum, val) => sum + (val.startsWith(startString) && startString !== '' ? `-${val.slice(startString.length)}` : ''), '')).slice(1);
}
