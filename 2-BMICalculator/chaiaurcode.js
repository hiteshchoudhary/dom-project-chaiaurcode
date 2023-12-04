const form = document.querySelector("form");
console.log("hello");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18) {
      result.innerHTML = `<span>${bmi} (Under Weight)</span>`;
    } else if (bmi > 18 && bmi < 24) {
      result.innerHTML = `<span>${bmi} (Normal)</span>`;
    } else {
      result.innerHTML = `<span>${bmi} (Over Weight)</span>`;
    }
  }
});
