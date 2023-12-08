const cursor = document.querySelector(".cursor");
// an array of 10 colors in hex value
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];
let colorIndex = 0;
document.addEventListener("mouseover", function (e) {
  console.log(`${e.clientX} ${e.clientY}`);

  // taking the positions of the cursor.
  const mouseX = e.clientX;
  const mousey = e.clientY;

  // updating the positons of the cursor.
  cursor.style.left = mouseX + "px";
  cursor.style.top = mousey + "px";

  // setting the color from the given array of ten.
  cursor.style.backgroundColor = colors[colorIndex];

  // display the cursor.
  cursor.style.show = "block";

  // updating the colors from the given array of ten.
  colorIndex = (colorIndex + 1) % colors.length;
});
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
