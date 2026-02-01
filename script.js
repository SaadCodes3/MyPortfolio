//dark mode button
const toggleBtn = document.getElementById("theme-switch");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//menu-button
const menuBtn =document.querySelector('.menu-btn');
const nav = document.querySelector(".navigation");
menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("open");
});
const navLinks = document.querySelectorAll(".navigation a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove("open");
  }
});

// close button 
const closeBtn =document.querySelector('.close-btn');
closeBtn.addEventListener("click",()=>{
    nav.classList.remove("open");
})


//scroll-to-top button display
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
//scroll-to-top button move
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
