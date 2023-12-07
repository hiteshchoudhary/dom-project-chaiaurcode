const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// By using ForEach

// buttons.forEach( (button) => {
// 	// console.log(button);
// 	button.addEventListener("click", (e) => {
// 		console.log(e);
// 		console.log(e.target)
// 		if(e.target.id === "grey"){
// 			body.style.backgroundColor = "grey";
// 		}
// 		else if (e.target.id === "white") {
// 			body.style.backgroundColor = "white";
// 		}
// 		else if(e.target.id === "blue"){
// 			body.style.backgroundColor = "blue";
// 		}
// 		else if(e.target.id === "yellow") {
// 			body.style.backgroundColor = "yellow";
// 		}
// 	} )
// } )

// By using switch statement

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log("WTF");
        break;
    }
  });
});
