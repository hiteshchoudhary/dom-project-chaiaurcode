const keyId = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  const element = `<span class="box" >${
    e.key === " " ? "Space" : e.key
  }</span>`;
  keyId.innerHTML = element;
});
