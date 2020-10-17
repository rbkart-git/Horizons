'use strict'
function menuBurger(selector) {
     let menu = $(selector);
     let button = menu.find('.menu-burger__button', '.menu-burger__lines');
     let links = menu.find('.menu-burger__item-link');
     let overlay = menu.find('.menu-burger__overlay');

     button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
     });

     links.on('click', () => toggleMenu());
     overlay.on('click', () => toggleMenu());

     function toggleMenu() {
          menu.toggleClass('menu-burger__active');

          if (menu.hasClass('menu-burger__active')) {
               $('body').css('overflow', 'hidden');
          } else {
               $('body').css('overflow', 'visible');
          }
     }
}

menuBurger('.menu-burger');