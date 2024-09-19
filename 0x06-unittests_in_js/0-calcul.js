/**
 * Calculates the sum of two rounded numbers
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of a and b, with both numbers rounded to the
 * nearest integer
 */
function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
