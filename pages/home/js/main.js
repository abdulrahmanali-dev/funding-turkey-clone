// menu Togller
// select elements from page

let menu = document.querySelector(".icons");
let menuImg = document.querySelector(".icons img");
let navbar = document.querySelector(".nav-bar");
let logoImg = document.querySelector(".logo img");
let header = document.querySelector("header");
// Add And And remove Clases From Elements
menu.onclick = () => {
  navbar.classList.toggle("active");
  menuImg.src = "../Mobile/Menu Icon_Dark.svg";
  logoImg.src = "../Mobile/FT Logo_DarkGrey.svg";
  header.classList.add("active");
  if (!navbar.classList.contains("active")) {
  // wait 190ms untill the nav disapeer
    setTimeout(() => {
      logoImg.src = "../Desktop/FTLogo_White.svg";
      menuImg.src = "../Mobile/Menu Icon.svg";
      header.classList.remove("active");
    }, 190);
  }
};

window.onscroll = () => {
  // wait 190ms untill the nav disapeer
  setTimeout(() => {
    logoImg.src = "../Desktop/FTLogo_White.svg";
    menuImg.src = "../Mobile/Menu Icon.svg";
    header.classList.remove("active");
  }, 190);
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
};
