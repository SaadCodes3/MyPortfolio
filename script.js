// ===== Elements =====
const toggleBtn = document.getElementById("theme-switch");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".navigation");
const scrollBtn = document.getElementById("scrollTopBtn");
const navLinks = document.querySelectorAll(".navigation a");


// ===== Dark Mode with LocalStorage =====


// عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// عند الضغط على الزرار
// ===== Dark Mode =====
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");



  // حفظ الوضع
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// ===== Mobile Menu =====
menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});
//for any place exept nav && menu button
document.addEventListener("click",(e) => {
  if(!nav.contains(e.target) && !menuBtn.contains(e.target)){
    nav.classList.remove("open");
  }
})
//for link click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
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
