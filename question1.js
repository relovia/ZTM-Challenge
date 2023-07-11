// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// Make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

array.sort(function (a, b) {
  return a - b;
});

// Initialize variables for nested array creation
let nestedArray = [];
let currentElement = array[0];
let currentGroup = [currentElement];

// Traverse the sorted array
for (let i = 1; i < array.length; i++) {
  // If the current element is the same as the previous element, add it to the current group
  if (array[i] === currentElement) {
    currentGroup.push(array[i]);
  } else {
    // If the current element is different, add the current group to the nested array
    nestedArray.push(currentGroup);
    // Set the current element to the new element
    currentElement = array[i];
    // Create a new group with the current element
    currentGroup = [currentElement];
  }
}

nestedArray.push(currentGroup);

console.log(nestedArray);

// BONUS: Sorting with different treatment for strings and numbers

let array2 = [1, "2", 2, "3"];

// Sort the array based on the element types
array2.sort(function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    // Sort the array based on the element types
    return a - b;
  } else if (typeof a === "string" && typeof b === "string") {
    // If both elements are strings, no specific order is applied
    return 0;
  } else if (typeof a === "string" && typeof b === "number") {
    // If one element is a string and the other is a number, prioritize strings first
    return -1;
  } else {
    // If one element is a number and the other is a string, prioritize numbers first
    return 1;
  }
});

let nestedArray2 = [];
let currentElement2 = array2[0];
let currentGroup2 = [currentElement2];

for (let i = 1; i < array2.length; i++) {
  if (typeof array2[i] === typeof currentElement2) {
    currentGroup2.push(array2[i]);
  } else {
    nestedArray2.push(currentGroup2);
    currentElement2 = array2[i];
    currentGroup2 = [currentElement2];
  }
}

nestedArray2.push(currentGroup2);

console.log(nestedArray2);
