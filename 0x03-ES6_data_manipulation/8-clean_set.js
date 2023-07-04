export default function cleanSet(set, startString) {
  const array = new Array();
  if (startString === '') {
    return '';
  }
  for (const member of set) {
    member.startsWith(startString)
      ? array.push(member.replace(startString, ''))
      : '';
  }
  return array.join('-');
}