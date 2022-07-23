const h2 = document.getElementById("h2");
let message = document.getElementById("msg");

h2.addEventListener("click", function () {
  message.textContent = "Clicked correctly!";
});
