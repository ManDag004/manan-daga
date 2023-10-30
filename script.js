document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const sections = document.getElementsByTagName('section');
  const menu = document.getElementById('menu');
  let clicked = false;
  
  function menuClick() {
    clicked = !clicked;
    
    console.log("Display of menu:", menu.style.display);
    for (let i = 0; i < sections.length; i++) {
      console.log("display of section:", sections[i].style.display);
    }
    
    if (clicked === true) {
      console.log('display');
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
    
    for (let i = 0; i < sections.length; i++) {
      if (clicked === false) {
        sections[i].style.display = 'block';
      } else {
        sections[i].style.display = 'none';
      }
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
