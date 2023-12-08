const randomColor = function () {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return String(color);
};

let intervaId;
const changeColor = function () {
  if (!intervaId) {
    intervaId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
const stopColor = function () {
  clearInterval(intervaId);
  intervaId = null;
};
document.querySelector("#start").addEventListener("click", changeColor);
document.querySelector("#stop").addEventListener("click", stopColor);
