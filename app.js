//Variables
let COLOR = "";
let CURRENT_CIRCLE = 0;
const COLOR_ARRAY = ["pink", "teal", "blue", "green"];
const WINNING_COLOR_ARRAY = shuffleArray(COLOR_ARRAY);
let current_color_array = [];


const colorMap = {
  "rgb(252, 3, 182)": "pink",
  "rgb(3, 252, 11)": "green",
  "rgb(3, 248, 252)": "teal",
  "rgb(23, 3, 252)": "blue",
};

console.log("WINNING_COLOR_ARRAY", WINNING_COLOR_ARRAY);

// DOM elements
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

//functions

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function isSame(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function (element, index) {
      return element === arr2[index];
    })
  );
}
