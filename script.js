document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("my-button");
  const ding = () => {
    new Audio("sounds/small-bell-ring-01a.mp3").play();
    // Agrega la clase 'clicked' al botón para activar la animación
    button.classList.add("clicked");
    // Quita la clase 'clicked' después de un breve tiempo (500 ms) para que la animación se repita en el siguiente clic.
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 500);
  };
  button.addEventListener("click", ding);
});
