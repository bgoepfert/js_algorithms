// Given an array A of N integers, find the minimal value from
// calculating the difference of the absolute sum of two any two sections of the array.

function tapeEquilibrium(A) {
  if (A.length === 1) return Math.abs(A[0]); // Edge case

  let totalSum = A.reduce((prev, curr) => prev + curr, 0);
  let sumFirstPart = 0;
  let sumSecondPart = totalSum;
  let minDiff = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    sumFirstPart += A[i];
    sumSecondPart -= A[i];
    const absDiff = Math.abs(sumFirstPart - sumSecondPart);

    minDiff = Math.min(minDiff, absDiff);
  }
  return minDiff;
}

console.log(tapeEquilibrium([-1000, 1000]));

// Tests //

// Test with a small array of positive integers:
console.assert(
  tapeEquilibrium([3, 1, 2, 4, 3]) === 1,
  "Test Failed: [3, 1, 2, 4, 3]"
);

// Test with a small array of negative integers:
console.assert(
  tapeEquilibrium([-3, -1, -2, -4, -3]) === 1,
  "Test Failed: [-3, -1, -2, -4, -3]"
);

// Test with an array containing zeros:
console.assert(
  tapeEquilibrium([0, 0, 0, 0, 0]) === 0,
  "Test Failed: [0, 0, 0, 0, 0]"
);

// Test with a single-element array (edge case):
console.assert(tapeEquilibrium([5]) === 5, "Test Failed: [5]");

// Test with a two-element array (edge case):
console.assert(tapeEquilibrium([1, 100]) === 99, "Test Failed: [1, 100]");

// Test with an array having repetitive elements:
console.assert(
  tapeEquilibrium([2, 2, 2, 2, 2]) === 2,
  "Test Failed: [2, 2, 2, 2, 2]"
);
