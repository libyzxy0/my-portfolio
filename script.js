let menuBtn = document.getElementById('menu-btn');
let nav = document.getElementById('nav');
let menuList = document.getElementById('menu-list')
var isOriginal = true;
var theme = true;

let changeTheme = document.getElementById('change-theme');
changeTheme.addEventListener('click', () => {
   if (theme) {
    changeTheme.innerHTML = svgLight;
  } else {
    changeTheme.innerHTML = svgDark;
  }
  theme = !theme;
})

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
let inpText = `My name is Jan Liby Dela Costa, and I am 15 years old. I embarked on my journey within the tech community at a young age. I am a proficient Full Stack Web Developer, currently immersing myself in the study of MERN Stack Development. My passion lies in the continuous exploration of novel concepts, which I embrace with enthusiasm every day.`;
let i = 0;
let typingInterval;
let txt = document.getElementById('desc');
function typeWriter() {
  txt.textContent += inpText.charAt(i);
  i++;
  if (i >= inpText.length) {
      clearInterval(typingInterval);
   }
}
typingInterval = setInterval(typeWriter, 30);