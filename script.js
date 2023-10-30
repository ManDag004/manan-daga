document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const sections = document.getElementsByTagName('section');
  const menu = document.getElementById('menu');
  let clicked = false;

  function menuClick() {
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
