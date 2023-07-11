// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

function sumTwoNumber(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i]; // Get the first number
    for (let j = i + 1; j < array.length; j++) {
      // Traverse the remaining numbers in the array
      let num2 = array[j]; // Get the second number
      // Check if the sum of the two numbers is equal to the target
      if (num1 + num2 === target) {
        return [num1, num2]; // Return the two numbers as an array
      }
    }
  }
  return "The target is not equal to any 2 numbers in the array.";
}

let result = sumTwoNumber([1, 3, 4, 6], 10);

console.log(result); // [4, 6]
