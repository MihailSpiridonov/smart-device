const buttonOpenPopup = document.querySelector('[data-popup-open]');
const modalPopup = document.querySelector('[data-popup]');
const modalPopupClose = modalPopup.querySelector('[data-popup-close]');
const inputNamePopup = document.querySelector('[data-popup-name]');
const body = document.querySelector('[data-body]');


// Открытие popup
function showModal() {
  modalPopup.classList.remove('popup--close');
  modalPopup.classList.add('popup--open');
  inputNamePopup.focus();
  body.classList.add('page__body--overlay');
  document.addEventListener('keydown', hideModalESC);
  modalPopupClose.addEventListener('click', hideModal);
  modalPopup.addEventListener('click', hideModalClickPast);
}

// Закрытие popup
const hideModal = () => {
  modalPopup.classList.remove('popup--open');
  modalPopup.classList.add('popup--close');
  body.classList.remove('page__body--overlay');
  document.removeEventListener('keydown', hideModalESC);
  modalPopupClose.removeEventListener('click', hideModal);
  modalPopup.removeEventListener('click', hideModalClickPast);
};

// Закрытие popup клавишей ESC
const hideModalESC = (evt) => {
  if (evt.which === 27) {
    modalPopup.classList.remove('popup--open');
    modalPopup.classList.add('popup--close');
    body.classList.remove('page__body--overlay');
    document.removeEventListener('keydown', hideModalESC);
    modalPopupClose.removeEventListener('click', hideModal);
    modalPopup.removeEventListener('click', hideModalClickPast);
  }
};

// Закрытие popup кликом мыши в произвольной области
const hideModalClickPast = (evt) => {
  if (!evt.target.closest('.popup__wrapper')) {
    modalPopup.classList.remove('popup--open');
    modalPopup.classList.add('popup--close');
    body.classList.remove('page__body--overlay');
  }
};


export {buttonOpenPopup, showModal};
