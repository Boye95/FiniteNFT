// Navbar display script

const body = document.querySelector("body");
const ham = document.querySelector(".ham-burger");
const nav = document.querySelector("#nav-res");

(function () {
  ham.addEventListener("click", () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
  });
})();
