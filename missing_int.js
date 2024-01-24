// Challenge: Find the missing int in the array A of size N,
// which holds integers between 1 and N + 1.

function missingInt(A) {
  const b = new Array(A.length + 1);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= A.length + 1) {
      b[A[i] - 1] = true;
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (!b[j]) return j + 1;
  }
}

console.log(missingInt([1, 3]));
