/* CURSOR */
const cursor = document.querySelector(".cursor");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let x = 0, y = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animarCursor() {
  if (cursor && outline) {
    x += (mouseX - x) * 0.12;
    y += (mouseY - y) * 0.12;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    outline.style.left = x + "px";
    outline.style.top = y + "px";
  }

  requestAnimationFrame(animarCursor);
}

animarCursor();

/* TEXTO ANIMADO */
const palabras = ["DESARROLLADOR", "FRONTEND", "JAVA", "PYTHON", "C++", "SQLITE", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"];
const texto = document.getElementById("texto");

let i = 0, j = 0, borrando = false;

function escribir() {
  if (!texto) return;

  if (!borrando) {
    texto.textContent = palabras[i].substring(0, j++);
    if (j > palabras[i].length) {
      borrando = true;
      setTimeout(escribir, 1000);
      return;
    }
  } else {
    texto.textContent = palabras[i].substring(0, j--);
    if (j < 0) {
      borrando = false;
      i = (i + 1) % palabras.length;
    }
  }

  setTimeout(escribir, borrando ? 80 : 120);
}

escribir();

/* INTRO */
function entrar() {
  const intro = document.getElementById("intro");

  if (intro) {
    intro.style.opacity = "0";
    intro.style.transition = "0.5s";

    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
  }
}