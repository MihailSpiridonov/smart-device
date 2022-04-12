import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {accordions, footer, hideActiveClass, hideNoactiveClass, openAccordion, closeAccordion} from './modules/accordion/accordion.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils

  // Аккордион
  if (accordions.length > 0) {
    footer.classList.remove('footer--nojs');
    for (let i = 0; i < accordions.length; i++) {
      const accordion = accordions[i];
      const accordionButton = accordion.querySelector('[data-accordion-button]');
      accordion.classList.add('footer__group--close');
      accordionButton.addEventListener('click', () => {
        hideActiveClass();
        accordion.classList.add('footer__group--active');
        if (accordion.classList.contains('footer__group--active')) {
          if (accordion.classList.contains('footer__group--close')) {
            hideNoactiveClass();
            openAccordion(accordion);
          } else if (accordion.classList.contains('footer__group--open')) {
            accordion.classList.remove('footer__group--active');
            closeAccordion(accordion);
          }
        } else {
          accordion.classList.remove('footer__group--open');
        }
      });
    }
  }
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
