function findMissingElementInRange(A) {
  const correctSum = (A.length * (A.length + 1)) / 2;
  let incorrectSum = 0;
  for (let i = 0; i < A.length; i++) {
    incorrectSum += A[i];
  }
  const difference = incorrectSum - correctSum;

  return A.length + 1 - difference;
}

console.log(findMissingElementInRange([2, 3, 4, 5]));
