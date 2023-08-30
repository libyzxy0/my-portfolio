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
  document.body.classList.remove("bg-particle-dark")
}
function setToDark() {
  document.documentElement.style.setProperty('--primary', '#f5f5f5');
  document.documentElement.style.setProperty('--secondary', '#2bff82');
  document.documentElement.style.setProperty('--bg', '#212A40');
  document.documentElement.style.setProperty('--lines', '#121212');
  changeTheme.innerHTML = svgLight;
  document.body.classList.toggle("bg-particle-dark")
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

let texts = ["I'am Jan Liby Dela Costa", "A Full Stack Web Developer", "Liby!"];
let currentTextIndex = 0;
let i = 0;
let isReversed = false;
let typingInterval;
let txt = document.getElementById('typ');

function typeWriter() {
  if (!isReversed) {
    txt.textContent += texts[currentTextIndex].charAt(i);
    i++;

    if (i >= texts[currentTextIndex].length) {
      clearInterval(typingInterval);
      setTimeout(reverseType, 1000); // Delay before reversing
    }
  } else {
    txt.textContent = texts[currentTextIndex].substr(0, i);
    i--;

    if (i < 0) {
      clearInterval(typingInterval);
      if (currentTextIndex < texts.length - 1) {
        setTimeout(nextText, 1000); // Delay before switching to next text
      } else {
        txt.textContent = texts[currentTextIndex]; // Display the last text
      }
    }
  }
}

function reverseType() {
  isReversed = true;
  typingInterval = setInterval(typeWriter, 50);
}

function nextText() {
  currentTextIndex++;
  isReversed = false;
  i = 0;
  txt.textContent = '';
  typingInterval = setInterval(typeWriter, 50);
}

typingInterval = setInterval(typeWriter, 50);
