/**
 * An array A consisting of N integers is given.
 * Rotation of the array means that each element is shifted right by one index,
 * and the last element of the array is moved to the first place. For example, the rotation of array
 * A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
 */

// With JS methods
function rotate(array, rotations) {
  if (array.length === 0 || rotations === 0) return array;

  for (let i = 0; i < rotations; i++) {
    const lastElement = array.pop();
    array.unshift(lastElement);
  }

  return array;
}

// Without JS methods
function rotateRaw(array, rotations) {
  if (array.length === 0 || rotations === 0) return array;

  for (let i = 0; i < rotations; i++) {
    for (let j = array.length - 1; j > 0; j--) {
      const tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
    }
  }

  return array;
}

console.log(rotate([1, 2, 3], 1));
console.log(rotateRaw([1, 2, 3], 1));
console.log(rotate(["A", "B", "C", "D", "E"], 7));
console.log(rotateRaw(["A", "B", "C", "D", "E"], 7));
