const accordions = document.querySelectorAll('[data-accordion]');
const footer = document.querySelector('[data-footer]');

function hideActiveClass() {
  accordions.forEach((accordion) => accordion.classList.remove('footer__group--active'));
}

function hideNoActiveClass() {
  accordions.forEach((accordion) => accordion.classList.remove('footer__group--open'));
  accordions.forEach((accordion) => accordion.classList.add('footer__group--close'));
}

function openAccordion(accordion) {
  accordion.classList.remove('footer__group--close');
  accordion.classList.add('footer__group--open');
}

function closeAccordion(accordion) {
  accordion.classList.remove('footer__group--open');
  accordion.classList.add('footer__group--close');
}

export {accordions, footer, hideActiveClass, hideNoActiveClass, openAccordion, closeAccordion};
