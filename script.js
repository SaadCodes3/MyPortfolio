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

// ===== Scroll Indicator =====
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = scrollIndicator.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// ===== Hero Stats Counter Animation =====
(() => {
  const heroStats = document.querySelector(".hero-stats");
  if (!heroStats) return;

  const statNumbers = heroStats.querySelectorAll("h3[data-target]");
  const DURATION = 1600; // ms, between 1-2 seconds

  // Parse a target string like "6+", "100+", "99%", "∞"
  // into a numeric part and a suffix part.
  const parseTarget = (raw) => {
    const match = raw.match(/\d+/);
    if (!match) return { value: null, suffix: raw }; // e.g. "∞"
    return { value: parseInt(match[0], 10), suffix: raw.replace(match[0], "") };
  };

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animateCount = (el, value, suffix) => {
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * value);

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${value}${suffix}`; // lock exact final value
      }
    };

    requestAnimationFrame(step);
  };

  // Set initial display state before the animation triggers
  statNumbers.forEach((el) => {
    const { value, suffix } = parseTarget(el.dataset.target.trim());
    el.textContent = value === null ? suffix : `0${suffix}`;
  });

  const runStatsAnimation = () => {
    statNumbers.forEach((el) => {
      const { value, suffix } = parseTarget(el.dataset.target.trim());
      if (value === null) return; // non-numeric (e.g. ∞) shows immediately, no animation
      animateCount(el, value, suffix);
    });
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runStatsAnimation();
          obs.unobserve(entry.target); // run only once, never restarts on scroll back
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(heroStats);
})();