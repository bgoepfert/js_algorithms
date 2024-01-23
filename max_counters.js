// N = int, A = array
function maxCounters(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0; // Hold the current value to use in the next max op.`
  let base = 0; // Hold the value that all elements should be at minimum

  for (let i = 0; i < A.length; i++) {
    // max op., update the minimum base value for all elements
    if (A[i] > N) {
      base = max;
    }

    // Increment op. and counter is less than base, set it to base before increment
    if (A[i] <= N && counters[A[i] - 1] < base) {
      counters[A[i] - 1] = base;
    }

    // Increment op., increment counter and update max if counter is now highest int in array.
    if (A[i] <= N) {
      counters[A[i] - 1] = counters[A[i] - 1] + 1;
      max = Math.max(counters[A[i] - 1], max);
    }
  }

  // Set any counter less than base to base.
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < base) {
      counters[i] = base;
    }
  }

  return counters;
}

console.log(maxCounters(5, [1, 6, 3, 4]));
