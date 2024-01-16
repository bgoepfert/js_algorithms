function binaryGap(n) {
  // Convert to binary string and then to an array of characters
  const binaryArray = n.toString(2).split("");

  let longestGap = 0;
  let currentGap = 0;
  let isGapOpen = false;

  for (let i = 0; i < binaryArray.length; i++) {
    const bit = Number(binaryArray[i]);

    // Continue if the bit is not a valid binary digit
    if (bit !== 0 && bit !== 1) {
      continue;
    }

    if (bit === 1) {
      // If we find a 1 and a gap is open, check if it's the longest gap
      if (isGapOpen) {
        longestGap = Math.max(longestGap, currentGap);
        currentGap = 0; // Reset current gap count
      }
      isGapOpen = true; // Open a new gap
    } else if (isGapOpen) {
      // If the gap is open and we find a 0, increase the gap count
      currentGap++;
    }
  }

  // Return the longest gap found
  return longestGap;
}

// console.log(binaryGap(1041));
console.log(binaryGap(10111100000001));
// console.log(binaryGap(15));
// console.log(binaryGap("10312_0n"));
