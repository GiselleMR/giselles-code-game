// declaring our global variables
let COLOR = "";
let CURRENT_CIRCLE = 0;
const COLOR_ARRAY = ["pink", "teal", "blue", "green"];
const WINNING_COLOR_ARRAY = shuffleArray(COLOR_ARRAY);
let current_color_array = [];

// NEW CODE
const colorMap = {
  "rgb(252, 3, 182)": "pink",
  "rgb(3, 252, 11)": "green",
  "rgb(3, 248, 252)": "teal",
  "rgb(23, 3, 252)": "blue",
};

console.log("WINNING_COLOR_ARRAY", WINNING_COLOR_ARRAY);

// Grabbing the necessary html elements from the DOM
const mastermind = document.getElementById("mastermind");
const singleColorArray = document.querySelectorAll(".singlecolor");

// adding event listeners
mastermind.addEventListener("click", function (evt) {
  console.log("HELLO: ", evt);
});

singleColorArray.forEach(function (element) {
  element.addEventListener("click", function (evt) {
    // NEW CODE
    if (CURRENT_CIRCLE >= 24) {
      // we don't want to try to update a circle that doesn't exist
      // since the ids only go up to 24
      // this is also where you would implement the losing logic;
      // if you reach circle #24 without finding a match, you've lost the game
      alert("LOST THE GAME!");
      return;
    }
    const style = window.getComputedStyle(element);
    COLOR = style.backgroundColor;
    CURRENT_CIRCLE++;
    console.log(COLOR);

    const circleToUpdate = document.getElementById(CURRENT_CIRCLE.toString());
    circleToUpdate.style.background = COLOR;

    // NEW CODE
    current_color_array.push(colorMap[COLOR]);
    if (CURRENT_CIRCLE % 4 === 0) {
      // after every 4 circles, we want to reset the current color array
      if (isSame(current_color_array, WINNING_COLOR_ARRAY)) {
        alert("WON THE GAME!");
      }
      current_color_array = [];
    }
  });
});

//All Helper functions

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
/**
 * Checks to see if the first and second array are equal and in the same order
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns true or false
 * check to see if winning color array and current color array are the same 
 * https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
 */
function isSame(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function (element, index) {
      return element === arr2[index];
    })
  );
}
