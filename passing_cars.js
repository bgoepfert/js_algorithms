// A non-empty array A consisting of N integers is given.
// The consecutive elements of array A represent consecutive cars on a road.

// The goal is to count passing cars.
// We say that a pair of cars (P, Q),
// where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
function passingCars(A) {
  const p = new Array(A.length + 1);
  p[0] = 0;
  for (let i = 1; i < p.length; i++) {
    p[i] = p[i - 1] + A[i - 1];
  }

  let totalPassingCars = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[j] === 0) {
      const passingCars = p[p.length - 1] - p[j];
      totalPassingCars += passingCars;
      if (totalPassingCars > 1000000000) {
        totalPassingCars = -1;
        break;
      }
    }
  }
  return totalPassingCars;
}

console.log(
  passingCars([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 1,
  ])
);
