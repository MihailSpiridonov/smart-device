import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {accordions, footer, hideActiveClass, hideNoActiveClass, openAccordion, closeAccordion} from './modules/accordion/accordion.js';
import {aboutBlock, aboutButton, showDescription} from './modules/description/description.js';
import {anchor, toSlide} from './modules/smooth-scroll/smooth-scroll.js';
import {form, formPopup, formSendPopup, formSendForm, validateLength} from './modules/form-validation/form-validation.js';
import {buttonOpenPopup, showModal} from './modules/modal-popup/modal-popup.js';
import {phoneInputs, onPhoneKeyDown, onPhoneInput, onPhonePaste} from './modules/mask-input-phone/mask-input-phone.js';

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // Маска для поля ввода телефона
  for (let i = 0; i < phoneInputs.length; i++) {
    const input = phoneInputs[i];
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('paste', onPhonePaste);
    input.addEventListener('input', validateLength);
  }


  // Модальное окно
  buttonOpenPopup.addEventListener('click', showModal);


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
            hideNoActiveClass();
            openAccordion(accordion);
          } else if (accordion.classList.contains('footer__group--open')) {
            accordion.classList.remove('footer__group--active');
            closeAccordion(accordion);
          }
        } else {
          accordion.classList.remove('footer__group--open');
        }
      });
      accordionButton.addEventListener('focus', () => {
        hideActiveClass();
        accordion.classList.add('footer__group--active');
      });
      accordionButton.addEventListener('blur', () => {
        hideActiveClass();
      });
    }
  }


  // Описание компании
  aboutBlock.classList.remove('about__description-wrapper--no-js');
  aboutButton.addEventListener('click', showDescription);


  // Плавный скролл по якорям из навигации
  anchor.addEventListener('click', toSlide);


  // Проверка форм на валидность
  form.addEventListener('submit', formSendForm);
  formPopup.addEventListener('submit', formSendPopup);


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
