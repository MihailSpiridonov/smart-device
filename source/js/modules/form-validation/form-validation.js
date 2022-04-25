// import {phoneInputs} from '././mask-input-phone/mask-input-phone.js';

const form = document.querySelector('[data-form]');
const formPopup = document.querySelector('[data-form-popup]');
const MIN_LENGTH_INPUT = 18;


// Add class
function formAddError(input) {
  input.parentElement.classList.add('error');
  input.classList.add('error');
}

// Remove class
function formRemoveError(input) {
  input.parentElement.classList.remove('error');
  input.classList.remove('error');
}

function formValidate(element) {
  let error = 0;
  let formRequired = element.querySelectorAll('[required]');

  if (formRequired.length > 0) {
    for (let i = 0; i < formRequired.length; i++) {
      const input = formRequired[i];
      formRemoveError(input);

      if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else if (input.getAttribute('type') === 'tel' && input.value.length < MIN_LENGTH_INPUT) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }
  return error;
}


function validateLength(phoneInput) {
  const valueLength = phoneInput.value.length;

  if (valueLength < MIN_LENGTH_INPUT) {
    phoneInput.setCustomValidity(`Ещё ${ MIN_LENGTH_INPUT - valueLength } симв.`);
  } else {
    phoneInput.setCustomValidity('');
  }
}


function formSendForm(evt) {
  evt.preventDefault();
  let error = formValidate(form);

  if (error === 0) {
    // eslint-disable-next-line no-alert
    alert('GREAT');
    form.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('WARNING');
  }
}


function formSendPopup(evt) {
  evt.preventDefault();
  let error = formValidate(formPopup);

  if (error === 0) {
    // eslint-disable-next-line no-alert
    alert('GREAT');
    formPopup.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('WARNING');
  }
}


export {form, formPopup, formSendPopup, formSendForm, validateLength};
