// Navbar display script

const body = document.querySelector("body");
const ham = document.querySelector(".ham-burger");
const nav = document.querySelector("#nav-res");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");
let mQuery800 = window.matchMedia("(max-width: 800px)");
let condition = 0;

(function () {
  ham.addEventListener("click", () => {
    if (mQuery800.matches) {
      nav.style.width = "100vw";
      nav.style.right = "0";
      body.style.overflow = "hidden";
    } else {
      nav.style.width = "40vw";
      nav.style.right = "0";
      body.style.overflow = "hidden";
      overlay.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", () => {
    nav.style.width = "0";
    nav.style.right = "-40vw";
    body.style.overflow = "auto";
    overlay.style.display = "none";
  });

  mQuery800.addEventListener("change", (mQuery800) => {
    if (mQuery800.matches) {
      nav.style.width = "100vw";
      nav.style.right = "0";
      body.style.overflow = "hidden";
    } else {
      nav.style.width = "40vw";
      nav.style.right = "0";
      body.style.overflow = "hidden";
      overlay.style.display = "block";
    }
  });
})();
