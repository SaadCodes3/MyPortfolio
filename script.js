//dark mode button
const toggleBtn = document.getElementById("theme-switch");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
//menu-button
const menuBtn =document.querySelector('.menu-btn');
menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("open");
})

//scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
