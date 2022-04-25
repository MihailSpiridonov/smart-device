const buttonOpenPopup = document.querySelector('[data-popup-open]');
const modalPopup = document.querySelector('[data-popup]');
const modalPopupClose = modalPopup.querySelector('[data-popup-close]');
const inputNamePopup = document.querySelector('[data-popup-name]');
const inputCheckboxPopup = document.querySelector('[data-popup-checkbox]');
const body = document.querySelector('[data-body]');


// Функция, запрещающая фокусировку по странице при открытом попапе
function focusRestrict() {
  document.addEventListener('focus', function (evt) {
    if (showModal && !modalPopup.contains(evt.target)) {
      evt.stopPropagation();
      modalPopup.focus();
    }
  }, true);
}
//

// Открытие popup
function showModal() {
  modalPopup.classList.remove('popup--close');
  modalPopup.classList.add('popup--open');
  inputNamePopup.focus();
  body.classList.add('page__body--overlay');
  document.addEventListener('keydown', hideModalESC);
  modalPopupClose.addEventListener('click', hideModal);
  document.addEventListener('keydown', hideModalKeyboard);
  document.addEventListener('keydown', setManageFocusPopup);
  document.addEventListener('keydown', setCheckbox);
  modalPopup.addEventListener('click', hideModalClickPast);
  focusRestrict();
}

// Закрытие popup
const hideModal = () => {
  modalPopup.classList.remove('popup--open');
  modalPopup.classList.add('popup--close');
  body.classList.remove('page__body--overlay');
  modalPopupClose.classList.remove('popup__close--focus');
  document.removeEventListener('keydown', hideModalESC);
  modalPopupClose.removeEventListener('click', hideModal);
  modalPopupClose.removeEventListener('keydown', hideModalKeyboard);
  modalPopup.removeEventListener('click', hideModalClickPast);
};

// Закрытие popup клавишей ESC
const hideModalESC = (evt) => {
  if (evt.which === 27) {
    modalPopup.classList.remove('popup--open');
    modalPopup.classList.add('popup--close');
    body.classList.remove('page__body--overlay');
    modalPopupClose.classList.remove('popup__close--focus');
    document.removeEventListener('keydown', hideModalESC);
    modalPopupClose.removeEventListener('click', hideModal);
    modalPopupClose.removeEventListener('keydown', hideModalKeyboard);
    modalPopup.removeEventListener('click', hideModalClickPast);
  }
};


// Добавление класса на кнопку при фокусировке
modalPopupClose.onfocus = function () {
  modalPopupClose.classList.add('popup__close--focus');
};

// Добавление класса на кнопку при фокусировке
modalPopupClose.onblur = function () {
  modalPopupClose.classList.remove('popup__close--focus');
};

// Добавление класса на кнопку при фокусировке
inputCheckboxPopup.onfocus = function () {
  inputCheckboxPopup.classList.add('popup__checkbox--focus');
};

// Добавление класса на кнопку при фокусировке
inputCheckboxPopup.onblur = function () {
  inputCheckboxPopup.classList.remove('popup__checkbox--focus');
};


//  Закрытие popup клавишами ENTER и пробел
const hideModalKeyboard = (evt) => {
  if (evt.which === 32 && modalPopup.classList.contains('popup--open') && modalPopupClose.classList.contains('popup__close--focus') || evt.which === 13 && modalPopup.classList.contains('popup--open') && modalPopupClose.classList.contains('popup__close--focus')) {
    modalPopup.classList.remove('popup--open');
    modalPopup.classList.add('popup--close');
    body.classList.remove('page__body--overlay');
    document.removeEventListener('keydown', hideModalESC);
    modalPopupClose.removeEventListener('click', hideModal);
    modalPopupClose.removeEventListener('keydown', hideModalKeyboard);
    modalPopup.removeEventListener('click', hideModalClickPast);
  }
};

//  Удержание фокуса внутри попапа
const setManageFocusPopup = (evt) => {
  if (inputCheckboxPopup.classList.contains('popup__checkbox--focus') && modalPopup.classList.contains('popup--open') && evt.which === 9) {
    modalPopupClose.focus();
  } else if (modalPopupClose.classList.contains('popup__close--focus') && modalPopup.classList.contains('popup--open') && evt.which === 16) {
    modalPopupClose.focus();
  }
};


// Управление checkbox-ом с клавиатуры
const setCheckbox = (evt) => {
  if (inputCheckboxPopup.classList.contains('popup__checkbox--focus') && modalPopup.classList.contains('popup--open') && evt.which === 13 || inputCheckboxPopup.classList.contains('popup__checkbox--focus') && modalPopup.classList.contains('popup--open') && evt.which === 32) {
    inputCheckboxPopup.classList.toggle('label--checked');
  }
};

// Закрытие popup кликом мыши в произвольной области
const hideModalClickPast = (evt) => {
  if (!evt.target.closest('.popup__wrapper')) {
    modalPopup.classList.remove('popup--open');
    modalPopup.classList.add('popup--close');
    body.classList.remove('page__body--overlay');
    modalPopupClose.classList.remove('popup__close--focus');
    document.removeEventListener('keydown', hideModalESC);
    modalPopupClose.removeEventListener('click', hideModal);
    modalPopupClose.removeEventListener('keydown', hideModalKeyboard);
    modalPopup.removeEventListener('click', hideModalClickPast);
  }
};


export {buttonOpenPopup, showModal};
