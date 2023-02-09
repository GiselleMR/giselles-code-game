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


//each line of colors. after every 4 colors goign to check to see if the clorls you clicked match the winning array
//single Color array is the color bank. eventlistiner is for every single color in the color bank. rename to colorbankarray
singleColorArray.forEach(function (element) {
  element.addEventListener("click", function (evt) {
    if (CURRENT_CIRCLE >= 24) {
      message.innerHTML = "YOU LOST";
      return;
    }
    //current circle will be what ever cirlce youre at during the game. element will be which ever. current circle is 1-24 adding even liste to every single color we want to know if we hit every 
    const style = window.getComputedStyle(element); //setting global color to be next cirles color. 
    COLOR = style.backgroundColor; // next circle we want to update color o fnext circle 
    CURRENT_CIRCLE += 1; //actually grabbing element to update (circle on the game board to update) incrimant 
    console.log(COLOR);

    const circleToUpdate = document.getElementById(CURRENT_CIRCLE.toString()); //id we are going to gradb (if at circle 4 grabbing id 4)
    circleToUpdate.style.background = COLOR; //color then updating in that ID

    
    current_color_array.push(colorMap[COLOR]);//using the push method to 
    if (current_color_array.length === 4) {
      
      if (isSame(current_color_array, WINNING_COLOR_ARRAY)) {
        message.innerHTML = "YOU WON"
      }
      current_color_array = [];//reseting to show we have moved on to the next rectangle but have not changed any colors

    }
  });

});

//functions assiging elements in an array reasigning the original line 64 is saying taht a is array i is the current index of the element we are at. for the elemeent of a at the current index I and the array a at the current index J(j is randomly generated) going ot reasign that element at a and j to be j and I

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

