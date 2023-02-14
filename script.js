document.addEventListener("DOMContentLoaded", () => {
  const ding = () => new Audio("https://www.soundjay.com/misc/sounds/small-bell-ring-01a.mp3").play();
  document.getElementById("my-button").addEventListener("click", ding);
});