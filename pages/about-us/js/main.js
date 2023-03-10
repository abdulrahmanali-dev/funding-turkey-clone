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
    logoImg.src = "../Desktop/FTLogo_White.svg";
    menuImg.src = "../Mobile/Menu Icon.svg";
    header.classList.remove("active");
  }
};

// Remove The Navbar On Scroll
window.onscroll = () => {
  logoImg.src = "../Desktop/FTLogo_White.svg";
  menuImg.src = "../Mobile/Menu Icon.svg";
  header.classList.remove("active");
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
};

//

let btns = document.querySelectorAll(".box p");

btns.forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll(".about-us .article").forEach((article) => {
      article.style.display = "none";
    });
    document.querySelector(btn.dataset.class).style.display = "flex";

    // remove All Active Classes
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    // Add Active Class
    btn.classList.add("active");
  };
});
