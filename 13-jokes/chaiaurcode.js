// handle this end point with XMLHttpRequest

/*

const btn = document.querySelector(".btn");

function displayJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    const reqObj = JSON.parse(xhr.response);
    createElement(reqObj.value);
  };
  xhr.send();
}

function createElement(joke) {
  const existingDiv = document.querySelector("#result-div");
  if (existingDiv) {
    existingDiv.innerHTML = `${joke}`;
  } else {
    const newdiv = document.createElement("div");
    newdiv.id = "result-div";
    newdiv.innerHTML = `${joke}`;
    btn.after(newdiv);
  }
}

btn.addEventListener("click", (e) => {
  displayJoke();
});

*/

// handle this end point with promises
// by using async, await

const btn = document.querySelector(".btn");

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonRes = await response.json();
    createElement(jsonRes.value);
  } catch (error) {
    createElement(error);
    console.log("E:", error);
  }
}

function createElement(joke) {
  const existingDiv = document.querySelector("#result-div");
  if (existingDiv) {
    existingDiv.innerHTML = `${joke}`;
  } else {
    const newdiv = document.createElement("div");
    newdiv.id = "result-div";
    newdiv.innerHTML = `${joke}`;
    btn.after(newdiv);
  }
}

btn.addEventListener("click", (e) => {
  getJoke();
});

// handle the case of race condition
// fetch using .then, .catch

/*

const btn = document.querySelector(".btn");

function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonRes) {
      createElement(jsonRes.value);
    })
    .catch(function (error) {
      createElement(error);
      console.log(error);
    });
}

function createElement(joke) {
  const existingDiv = document.querySelector("#result-div");
  if (existingDiv) {
    existingDiv.innerHTML = `${joke}`;
  } else {
    const newdiv = document.createElement("div");
    newdiv.id = "result-div";
    newdiv.innerHTML = `${joke}`;
    btn.after(newdiv);
  }
}

btn.addEventListener("click", (e) => {
  getJoke();
});

*/
