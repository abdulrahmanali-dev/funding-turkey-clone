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

let questions = document.querySelectorAll(".qas .question");
let questionImgs = document.querySelectorAll(".qas .question img");

questions.forEach((question) => {
  question.onclick = () => {
    document.querySelectorAll(".qas .answer").forEach((article) => {
      article.style.display = "none";
    });
    document.querySelector(`.qas ${question.dataset.class}`).style.display = "flex";

    // remove minimize img from all and add expand img
    questionImgs.forEach((img) => {
      img.src = "./Desktop/Icon_Expand.svg";
    });
    // Change the expand img to minimize img
    question.childNodes[3].src = "./Desktop/Icon_Minimize.svg";
  };
});
