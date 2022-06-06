// Navbar display script

const body = document.querySelector("body");
const ham = document.querySelector(".ham-burger");
const nav = document.querySelector("#nav-res");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");
let mQuery800 = window.matchMedia("(max-width: 800px)");

// This code was written by me and refactored by plamoni from Commit Your Code Discord server.
let menuOpen = false;

function showMenu() {
  menuOpen = true;
  body.style.overflow = "hidden";
  nav.style.right = "0";

  if (mQuery800.matches) {
    nav.style.width = "100vw";
  } else {
    nav.style.width = "40vw";
    overlay.style.display = "block";
  }
}

function hideMenu() {
  menuOpen = false;

  nav.style.width = "0";
  nav.style.right = "-40vw";
  body.style.overflow = "auto";
  overlay.style.display = "none";
}

ham.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
mQuery800.addEventListener("change", () => {
  if (menuOpen) {
    showMenu();
  }
});

// Code for product promo countdown
// The code below is gotten from w3schools.com. THis is the page link
// https://www.w3schools.com/howto/howto_js_countdown.asp

// It has been edited to accommodate the needs of this project.

let beep = document.querySelector("#beep");

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  beep.innerHTML = hours + "h: " + minutes + "m: " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    beep.innerHTML = "EXPIRED";
  }
}, 1000);

// the initial code

// (function () {
//   ham.addEventListener("click", () => {
//     if (mQuery800.matches) {
//       nav.style.width = "100vw";
//       nav.style.right = "0";
//       body.style.overflow = "hidden";
//     } else {
//       nav.style.width = "40vw";
//       nav.style.right = "0";
//       body.style.overflow = "hidden";
//       overlay.style.display = "block";
//     }
//   });

//   closeBtn.addEventListener("click", () => {
//     nav.style.width = "0";
//     nav.style.right = "-40vw";
//     body.style.overflow = "auto";
//     overlay.style.display = "none";
//   });

//   mQuery800.addEventListener("change", (mQuery800) => {
//     if (mQuery800.matches) {
//       nav.style.width = "100vw";
//       nav.style.right = "0";
//       body.style.overflow = "hidden";
//     } else {
//       nav.style.width = "40vw";
//       nav.style.right = "0";
//       body.style.overflow = "hidden";
//       overlay.style.display = "block";
//     }
//   });
// })();
