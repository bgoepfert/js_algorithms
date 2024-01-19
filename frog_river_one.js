function frogRiverOne(X, A) {
  let count_set = new Set();
  for (let i = 0; i < A.length; i++) {
    count_set.add(A[i]);
    if (count_set.size === X) return i;
  }
  return -1;
}
