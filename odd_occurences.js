// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value,
// except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a function that:
// Given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// Assumptions:

// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.

function solution(A) {
  const occurences = new Map();
  for (let i = 0; i < A.length; i++) {
    // get current count of value
    const curr = occurences.get(A[i]);
    // if it's undefined, add the value with a count of 1
    if (!curr) occurences.set(A[i], 1);
    // if it exists, and the count is odd after adding 1, delete it as we found a pair
    else if ((curr + 1) % 2 === 0) occurences.delete(A[i]);
  }

  // Get the first key, which will be the odd one if only 1 value occurs an odd number of times.
  const mapIterator = occurences.keys();
  return mapIterator.next().value;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
