let COLOR = "";
let CURRENT_CIRCLE = 0;
let current_color_array = [];
const COLOR_ARRAY = ["pink", "teal", "blue", "green"];
const WINNING_COLOR_ARRAY = shuffleArray(COLOR_ARRAY);

const colorMap = {
  "rgb(252, 3, 182)": "pink",
  "rgb(3, 252, 11)": "green",
  "rgb(3, 248, 252)": "teal",
  "rgb(23, 3, 252)": "blue",
};

console.log("WINNING_COLOR_ARRAY", WINNING_COLOR_ARRAY);

const singleColorArray = document.querySelectorAll(".singlecolor");
const message = document.getElementById("message")

singleColorArray.forEach(function (element) {
  element.addEventListener("click", function() {
    if (CURRENT_CIRCLE === 24) {
      message.innerHTML = "YOU LOST";
      return;
    }
    const style = window.getComputedStyle(element); 
    COLOR = style.backgroundColor; 
    CURRENT_CIRCLE += 1; 
    console.log(COLOR);
    
    const circleToUpdate = document.getElementById(CURRENT_CIRCLE.toString()); 
    circleToUpdate.style.background = COLOR; 
    
    current_color_array.push(colorMap[COLOR]);
    if (current_color_array.length === 4) {
      
      if (isSame(current_color_array, WINNING_COLOR_ARRAY)) {
        message.innerHTML = "YOU WON"
        return;
      }
      
    }
    console.log(CURRENT_CIRCLE);
  });
  
});

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