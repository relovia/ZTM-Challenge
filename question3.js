// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convertColor(color) {
  if (color[0] === "#") {
    color = color.slice(1);

    if (color.length !== 6) {
      return "Invalid color format";
    }

    // Extract the individual R, G, and B values from the color string
    let r = parseInt(color.substr(0, 2), 16);
    let g = parseInt(color.substr(2, 2), 16);
    let b = parseInt(color.substr(4, 2), 16);

    return `rgb(${[r, g, b]})`;
  }
  // Check if the input color is in RGB format
  else if (color.startsWith("rgb(") && color.endsWith(")")) {
    // Remove the "rgb(" prefix and ")" suffix from the color string
    color = color.substring(4, color.length - 1);

    // Split the color string by commas and convert each value to an integer
    let rgbValues = color.split(",").map(function (value) {
      return parseInt(value.trim(), 10);
    });

    // Check if the resulting array has 3 values, contains only valid integers,
    // has values in the range of 0 to 255, and doesn't contain decimals
    if (
      rgbValues.length !== 3 ||
      rgbValues.some(isNaN) ||
      rgbValues.some((value) => value < 0 || value > 255) ||
      color.includes(".")
    ) {
      return "Invalid color format";
    }

    // Convert the RGB values to their corresponding HEX format
    let hex =
      "#" +
      rgbValues
        .map(function (value) {
          // Convert each value to its HEX representation and pad with leading zeros if necessary
          let hexValue = value.toString(16).toUpperCase();
          return hexValue.padStart(2, "0");
        })
        .join("");

    return hex;
  } else {
    return "Invalid color format";
  }
}

let color1 = "#FF0000";
let color2 = "rgb(0, 255, 0)";

console.log(convertColor(color1));
console.log(convertColor(color2));
