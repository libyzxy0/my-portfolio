let menuBtn = document.getElementById('menu-btn');
let nav = document.getElementById('nav');
let menuList = document.getElementById('menu-list')
let svgClose = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
let svgOpen = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>`;

var isOriginal = true;

menuBtn.addEventListener('click', () => {
    if (isOriginal) {
    menuBtn.innerHTML = svgClose;
  } else {
    menuBtn.innerHTML = svgOpen;
  }  
    isOriginal = !isOriginal;
    nav.classList.toggle("active");
    menuList.classList.toggle("active");
})