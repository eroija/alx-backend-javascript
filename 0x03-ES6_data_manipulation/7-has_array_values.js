/**
 * Determines whether given Set has all values from given array.
 * @param {Set} set - Set to check
 * @param {Array} array - array of values to check for
 * @return {boolean} True if the Set has all the values from the array,
 * false otherwise
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
