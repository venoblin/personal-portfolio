const headerNav = document.querySelector('header nav');
const headerLinksContainer = headerNav.querySelector('.links-container');
const headerLinks = headerNav.querySelectorAll('.links');
const headerLogos = headerNav.querySelectorAll('.header-logos');
const burgerMenu = headerNav.querySelector('.burger-menu');
const burgerMenuSpans = burgerMenu.querySelectorAll('span');
const workTiles = document.querySelectorAll('.work-tiles');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');

//BURGER MENU HOVER EFFECT
burgerMenu.addEventListener('mouseover', () => {
  burgerMenuSpans.forEach((span) => {
    span.classList.toggle('primary-color-bg');
  });
});
burgerMenu.addEventListener('mouseout', () => {
  burgerMenuSpans.forEach((span) => {
    span.classList.toggle('primary-color-bg');
  });
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  headerNav.classList.toggle('open');
  headerLinksContainer.classList.toggle('open');

  //TOGGLES NAV BACKGROUND IF NAV IS AT THE TOP OF THE PAGE
  if (window.scrollY < 75) {
    headerNav.classList.toggle('nav-scroll-bg');
  }
});

//CHANGES TEXT BASED ON WINDOW WIDTH
if (window.innerWidth > 800) {
  mainHeader.textContent = 'Jonathan,';
  mainSubHeader.textContent = 'Website Developer';
} else {
  mainHeader.textContent = 'Jon,';
  mainSubHeader.textContent = 'Web Dev';
}
window.addEventListener('resize', () => {
  //CHANGES TEXT BASED ON RESIZE WIDTH
  if (this.innerWidth > 800) {
    mainHeader.textContent = 'Jonathan,';
    mainSubHeader.textContent = 'Website Developer';
  } else {
    mainHeader.textContent = 'Jon,';
    mainSubHeader.textContent = 'Web Dev';
  }
});

let lastScrollTop = 0;
document.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    //ADDS NAV BACKGROUND WHEN USER SCROLLS ABOVE 75
    headerNav.classList.add('nav-scroll-bg');
  } else {
    //REMOVES NAV BACKGROUND WHEN USER SCROLLS BELOW 75
    headerNav.classList.remove('nav-scroll-bg');
  }

  //CLOSES BURGER MENU WHEN USER SCROLLS
  if (burgerMenu.classList.contains('open')) {
    burgerMenu.classList.remove('open');
    headerNav.classList.remove('open');
    headerLinksContainer.classList.remove('open');
  }

  //CHECKS WHETHER USER IS SCROLLING DOWN OR UP
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop && !burgerMenu.classList.contains('open')) {
    //DOWN
    headerNav.classList.add('nav-scroll-hide');
  } else {
    //UP
    headerNav.classList.remove('nav-scroll-hide');
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


workTiles.forEach((tile) => {
  const img = tile.querySelector('img');
  const projectInfo = tile.querySelector('.project-info');

  //WORK TILES HOVER EFFECT
  tile.addEventListener('mouseover', () => {
    if (img) {
      img.classList.toggle('scale-hover');
    }
    projectInfo.classList.toggle('show-project-info');
  });
  tile.addEventListener('mouseout', () => {
    if (img) {
      img.classList.toggle('scale-hover');
    }
    projectInfo.classList.toggle('show-project-info');
  });
});

//NAV LINKS AND LOGOS HOVER EFFECT
headerLinks.forEach((link, linkIdx) => {
  link.addEventListener('mouseover', () => {
    headerLinks.forEach((link) => {
      link.classList.toggle('muted-color');
    });
    headerLogos.forEach((logo, logoIdx) => {
      if (logoIdx !== linkIdx) {
        logo.classList.toggle('muted-fill');
      } else {
        logo.classList.toggle('primary-fill');
      }
    });
  });
  link.addEventListener('mouseout', () => {
    headerLinks.forEach((link) => {
      link.classList.toggle('muted-color');
    });
    headerLogos.forEach((logo, logoIdx) => {
      if (logoIdx !== linkIdx) {
        logo.classList.toggle('muted-fill');
      } else {
        logo.classList.toggle('primary-fill');
      }
    });
  });
});
