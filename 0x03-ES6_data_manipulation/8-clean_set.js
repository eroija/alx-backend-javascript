/**
 * Joins set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - collection of strings.
 * @param {String} startString - string to strip from the beginning
 * of each item in set.
 * @returns
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
