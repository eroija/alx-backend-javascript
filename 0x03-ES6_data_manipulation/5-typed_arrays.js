/**
 * Creates buffer array with given position set to given value.
 * @param {Number} length - length of buffer.
 * @param {Number} position - position to modify.
 * @param {Number} value - value to be stored in position.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
