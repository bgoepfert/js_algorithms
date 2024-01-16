function reverse(arr) {
  // We only want to iterate over half the array
  // have to floor() due to JS returning decimals for integer division.
  const half_len = Math.floor(arr.length / 2);
  for (let i = 0; i < half_len; i++) {
    // Get values starting from the end of the array
    const k = arr.length - i - 1;
    const tmp = arr[i];
    // Swap the values
    arr[i] = arr[k];
    arr[k] = tmp;
  }

  return arr;
}

console.log(reverse([1, 2, 3]));
