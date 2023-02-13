function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++) {
    const difference = target - array[i]
      for (j = i + 1; j < array.length; j++) {
        if (difference === array[j]) {
          return true
        }
      }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
  Quadratic O(n^2)
*/

/* 
  Add your pseudocode here
  forloop
  Subtract first number in array from the Target number.
  Difference = target - array[i]
  Iterate through remaining numbers and return true if any of them equal the Difference.
  if (difference === array[i]){return true})
  Do this with remaining numbers in array.
  another for loop (if (difference === array[i]){return true})
  If none of the numbers equal the Difference, return false. 
  return false

*/

/*
  Add written explanation of your solution here
  Subtract first number in array from the Target number.
  Iterate through remaining numbers and return true if any of them equal the Difference.
  Do this with remaining numbers in array.
  If none of the numbers equal the Difference, return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
