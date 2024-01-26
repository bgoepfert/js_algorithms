// Write a function that calculates the sum of a range of an array.

// Array, left value of range, right value of range
// O(n) time to calculate the prefix array
// O(1) time to get the sum of a range in A

// If we store the prefixArray and keep it up to date,
// we can always get the sum of a range of A in constant time.
// E.g. A = profit/loss per day on investments, we can get the total profit/loss for any day range.
function prefixSum(A, l, r) {
  let prefixArray = new Array(A.length + 1);
  prefixArray[0] = 0; // buffer so we don't need to handle edge cases.
  for (let i = 1; i < prefixArray.length; i++) {
    prefixArray[i] = prefixArray[i - 1] + A[i - 1];
  }

  return prefixArray[r + 1] - prefixArray[l];
}

console.log(prefixSum([1, 7, 11, 32, -3, 8, -17, 2], 0, 7));
