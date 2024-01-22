// Write a function that checks if the input array is a valid permutation.
// Return 1 if it is a permutation, otherwise return 0.

// e.g. [1,2,3] is valid
// e.g. [1,3,4] is not valid

function permCheck(A) {
  if (A.length < 1) return 0;

  const arrSet = new Set();
  const permSet = new Set();

  for (let i = 0; i < A.length; i++) {
    arrSet.add(A[i]);
    permSet.add(i + 1);
  }

  for (const value of permSet) {
    if (!arrSet.has(value)) return 0;
  }

  return 1;
}

console.log(permCheck([4, 1, 3]));
