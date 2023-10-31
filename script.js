document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const menuTemplate = document.createElement('header');
  
  menuTemplate.innerHTML = `
  <div id="menuIcon" class="menu-icon">
  <i class="fas fa-bars"></i>
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
  const sections = document.getElementsByTagName('section');
  const menu = document.getElementById('menu');
  let clicked = false;
  
  function menuClick() {
    console.log('clicked');
    clicked = !clicked;
    
    if (clicked === true) {
      console.log('display');
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
    
    if (clicked === false) {
      sections[0].style.display = 'block';
    } else {
      sections[0].style.display = 'none';
    }
  }
  
  menuIcon.addEventListener('click', menuClick);
  
  Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
    
    item.onclick = () => {
      menuClick();
    }
  });
});
