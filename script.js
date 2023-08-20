let menuBtn = document.getElementById('menu-btn');
let nav = document.getElementById('nav');
let menuList = document.getElementById('menu-list')
var isOriginal = true;
var isDark = true;
let changeTheme = document.getElementById('change-theme');

let theme = localStorage.getItem('theme');

function setToLight() {
  document.documentElement.style.setProperty('--primary', '#272614');
  document.documentElement.style.setProperty('--secondary', '#2bff82');
  document.documentElement.style.setProperty('--bg', '#ffffff');
  document.documentElement.style.setProperty('--lines', 'gainsboro');
  changeTheme.innerHTML = svgDark;
  document.body.classList.toggle("bg-particle-light")
}
function setToDark() {
  document.documentElement.style.setProperty('--primary', '#f5f5f5');
  document.documentElement.style.setProperty('--secondary', '#2bff82');
  document.documentElement.style.setProperty('--bg', '#222837');
  document.documentElement.style.setProperty('--lines', '#121212');
  changeTheme.innerHTML = svgLight;
  document.body.classList.remove("bg-particle-light")
}
if(theme != "dark" || !theme) {
  setToLight()
} else {
  setToDark()
}

changeTheme.addEventListener('click', () => {
   if (isDark) {
    changeTheme.innerHTML = svgLight;
    setToDark()
    localStorage.setItem("theme", "dark")
  } else {
    changeTheme.innerHTML = svgDark;
    setToLight()
    localStorage.removeItem('theme');
  }
  isDark = !isDark;
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
let inpText = `My name is Jan Liby Dela Costa, and I am 15 years old. I embarked on my journey within the tech community at a young age. I am a Full Stack Web Developer, currently immersing myself in the study of MERN Stack Development. My passion lies in the continuous exploration of novel concepts, which I embrace with enthusiasm every day.`;
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