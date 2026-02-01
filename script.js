// ===== Elements =====
const toggleBtn = document.getElementById("theme-switch");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".navigation");
const scrollBtn = document.getElementById("scrollTopBtn");

// ===== Dark Mode =====
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ===== Mobile Menu =====
menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

// ===== Scroll Button =====
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
