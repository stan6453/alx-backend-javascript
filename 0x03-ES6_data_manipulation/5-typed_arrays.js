export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) throw Error('Position outside range');
  const binary8Array = new Uint8Array(length);
  binary8Array[position] = value;
  return binary8Array.buffer;
}
