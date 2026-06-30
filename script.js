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
// Typing Animation / Typewriter Effect
const textArray = ["Front-End Developer", "Web Developer", "JavaScript Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = textArray[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();

// ===== Skills Slider =====
const slider = document.querySelector(".content.slider");
slider.innerHTML += slider.innerHTML; // Duplicate the content for infinite scrolling


// التحديث التلقائي لسطر حقوق الملكية مع المسافات
const copyrightElement = document.getElementById('copyright-text');

if (copyrightElement) {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const ownerName = "SaadALHusseiny";

  
    copyrightElement.innerHTML = `Copyright © ${startYear} - ${currentYear} ${ownerName}`;
}


// كود الماوس 
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}

