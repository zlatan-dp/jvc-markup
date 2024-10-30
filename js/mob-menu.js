(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mob-menu-btn'),
      closeMenuBtn: document.querySelector('.mob-menu-close'),
      menu: document.querySelector('.mob-menu'),
      body: document.querySelector('body'),
      link: document.querySelector('.mob-menu-list'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.link.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();