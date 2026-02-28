const body = document.body;
const toggle = document.querySelector(".compass-toggle");
const menu = document.querySelector(".menu");
const modeBtn = document.querySelector(".mode-toggle");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  document.querySelector(".world").style.transform =
    `translateY(${current * 0.2}px)`;
  document.querySelector(".atmosphere").style.transform =
    `translateY(${current * -0.05}px)`;
  lastScroll = current;
});

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  toggle.style.transform = menu.classList.contains("open")
    ? "rotate(90deg)"
    : "rotate(0deg)";
});

modeBtn?.addEventListener("click", () => {
  body.classList.toggle("light");
});
