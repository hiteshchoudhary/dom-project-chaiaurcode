const btn = document.querySelector(".btn");

// By using xhr

/*

function showImg() {
  const apiUrl = "https://api.thecatapi.com/v1/images/search";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl);
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    } else {
      const reqObj = JSON.parse(xhr.response);
      const imgUrl = reqObj[0].url;
      showCat(imgUrl);
      console.log(imgUrl);
    }
  };

  xhr.send();
}

function showCat(imgUrl) {
  const div = document.querySelector(".container");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.className = "cats random_cats";
  div.innerHTML = "";
  div.appendChild(img);
}

btn.addEventListener("click", showImg);

*/

// By using fetch

function displayImg() {
  var apiUrl = "https://api.thecatapi.com/v1/images/search";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var imageUrl = data[0].url;
      showCat(imageUrl);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function showCat(imgUrl) {
  const div = document.querySelector(".container");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.className = "cats random_cats";
  div.innerHTML = "";
  div.appendChild(img);
}

btn.addEventListener("click", displayImg);
