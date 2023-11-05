document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const menuTemplate = document.createElement('header');
  const sections = document.getElementsByTagName('section');
  
  menuTemplate.innerHTML = `
  <div id="menuIcon" class="menu-icon">
  <i class="fas fa-bars"></i>
  </div>
  
  <div class="dark-mode-icon">
  <i class="fas fa-sun"></i>
  </div>
  
  <div id="menu">
  <div id="menu-item-container">
  <a class="menu-item" href="index.html">About</a>
  <a class="menu-item" href="projects.html">Projects</a>
  <a class="menu-item" href="resume.html">Resume</a>
  <a class="menu-item" href="transcript.html">Transcript</a>
  </div>
  <div id="menu-background"></div>
  </div>
  `;
  
  body.insertBefore(menuTemplate, body.firstChild);
  
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('menu');
  const menuItemsContainer = document.getElementById('menu-item-container');
  const menuItems = document.getElementsByClassName('menu-item');
  const menuBackground = document.getElementById('menu-background');
  const darkModeIcon = document.querySelector('.dark-mode-icon');
  let clicked = false;
  setDarkMode();
  
  function menuClick() {
    clicked = !clicked;
    
    if (clicked === true) {
      var timeline1 = gsap.timeline();
      
      timeline1
      .to(sections[0], {duration: 0.2, opacity: 0})
      .to(sections[0], {duration: 0, display: 'none'})
      .to(menu, {duration: 0, display: 'flex'})
      .to(menu, {duration: 0.2, opacity: 1})
      .set("#menu-background", {clearProps: "all"})
      .from("#menu-background", {duration: 0.25, opacity: 0, backgroundSize: "1vh 1vh"})
      .from(".menu-item", {duration: 0.15, opacity: 0, y: -70, stagger: 0.1});
    } else {
      var timeline2 = gsap.timeline();
      
      timeline2
      .to(".menu-item", {duration: 0.15, opacity: 0, y: -70, stagger: 0.1})
      .to("#menu-background", {duration: 0.25, opacity: 0, backgroundSize: "1vh 1vh"})
      .to(menu, {duration: 0, opacity: 0})
      .to(menu, {duration: 0, display: 'none'})
      .set("#menu-background", {clearProps: "all"})
      .to(sections[0], {duration: 0, display: 'block'})
      .to(sections[0], {duration: 0.25, opacity: 1})
      .set(".menu-item", {clearProps: "all"});
    }
  }

  function setDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
      gsap.to(document.documentElement, {
        '--background-color': '#333',
        '--text-color': '#fff',
        '--color-num': 255,
        duration: 0,
      });
      darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      gsap.to(document.documentElement, {
        '--background-color': '#fff',
        '--text-color': '#333',
        '--color-num': 0,
        duration: 0,
      });
      darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
  
  function darkModeToggle() {
    console.log('clicked');
    console.log('is it dark mode:', localStorage.getItem('darkMode'));
    if (localStorage.getItem('darkMode') === 'true') {
      localStorage.setItem('darkMode', 'false');
      
      gsap.to(darkModeIcon, {
        rotate: 180, 
        scale: 0, 
        opacity: 0.5, 
        duration: 0.5,
        onComplete: () => {
          darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>';
          gsap.fromTo(darkModeIcon, { scale: 0, opacity: 0, rotate: -180 }, { scale: 1, opacity: 1, duration: 0.5, rotate: 0 });
        },
      });
      
      gsap.to(document.documentElement, {
        '--background-color': '#fff',
        '--text-color': '#333',
        '--color-num': 0,
        duration: 0.5,
      });
    } else {
      localStorage.setItem('darkMode', 'true');
      
      gsap.to(darkModeIcon, {
        rotate: -180,
        scale: 0,
        opacity: 0.5,
        duration: 0.5,
        onComplete: () => {
          darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
          gsap.fromTo(darkModeIcon, { scale: 0.8, opacity: 0, rotate: 180 }, { scale: 1, opacity: 1, duration: 0.5, rotate: 0 });
        },
      });
      
      gsap.to(document.documentElement, {
        '--background-color': '#333',
        '--text-color': '#fff',
        '--color-num': 255,
        duration: 0.5,
      });
    }
  }
  
  menuIcon.addEventListener('click', menuClick);
  
  darkModeIcon.addEventListener('click', darkModeToggle)
  
  
  menuItemsContainer.addEventListener('mouseover', () => {
    gsap.to(menuBackground, {duration: 0.25, opacity: 0.3, backgroundSize: "9vh 9vh"});
  });
  
  menuItemsContainer.addEventListener('mouseout', () => {
    gsap.to(menuBackground, {duration: 0.25, opacity: 1, backgroundSize: "10vh 10vh"});
  });
  
  Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
      
      gsap.to(menuBackground, {
        backgroundPosition: `100% -${25 * (index+1)}%`,
        duration: 0.5, // Adjust the duration as needed
        ease: 'ease',
      });
    }
    
    item.onclick = () => {
      menuClick();
    }
  });
  
  
});
