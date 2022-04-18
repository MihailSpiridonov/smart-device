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
      formRemoveError(formRequired[i]);

      if (formRequired[i].getAttribute('type') === 'checkbox' && formRequired[i].checked === false) {
        formAddError(formRequired[i]);
        error++;
      } else if (formRequired[i].getAttribute('type') === 'tel' && formRequired[i].value.length < MIN_LENGTH_INPUT) {
        formAddError(formRequired[i]);
        error++;
      } else {
        if (formRequired[i].value === '') {
          formAddError(formRequired[i]);
          error++;
        }
      }
    }
  }
  return error;
}


function formSend(evt) {
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


export {form, formPopup, formSend};
