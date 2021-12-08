"use strict";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const burgerBtn = document.querySelector(".ham-burger");
const navUl = document.querySelector(".nav-ul");
const lines = document.querySelectorAll(".line");
const navLinks = document.querySelectorAll(".nav-links");
const navLinksAnchor = document.querySelectorAll(".nav-links a");
tl.to(".text", { y: "0%", duration: 1, stagger: 0.3 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("toggle");
  navUl.classList.toggle("open");
  lines.forEach(function (item, index) {
    if (navUl.classList.contains("open")) {
      item.style.backgroundColor = "white";
    } else {
      item.style.backgroundColor = "black";
    }
  });
  navLinksAnchor.forEach(function (item, index) {
    if (navUl.classList.contains("open")) {
      item.style.borderColor = "white";
    } else {
      item.style.borderColor = "black";
    }
  });
  navLinks.forEach(function (item, index) {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `navLinkFade 0.5s forwards ease ${
        index / 7 + 0.3
      }s`;
    }
  });
});
