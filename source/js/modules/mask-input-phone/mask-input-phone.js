const phoneInputs = document.querySelectorAll('[data-input-phone]');


function getInputNumbersValue(input) {
  // Возвращает только числовые значения
  return input.value.replace(/\D/g, '');
}

function onPhonePaste(evt) {
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);
  const pasted = evt.clipboardData || window.clipboardData;
  if (pasted) {
    const pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      // При попытке вставить нечисловой символ — удаляем все нечисловые символы
      input.value = inputNumbersValue;
      return;
    }
  }
}

function onPhoneInput(evt) {
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);
  const selectionStart = input.selectionStart;
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
    return input.value;
  }

  if (input.value.length !== selectionStart) {
    // Редактирование в середине ввода, а не последний символ
    if (evt.data && /\D/g.test(evt.data)) {
      // Попытка ввода нечислового символа
      input.value = inputNumbersValue;
    }
  }

  if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === 9) {
      inputNumbersValue = '7' + inputNumbersValue;
    }
    const firstSymbols = (inputNumbersValue[0] === 8) ? '8' : '+7';
    formattedInputValue = input.value = firstSymbols + ' ';
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+ ' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
  return input.value;
}

function onPhoneKeyDown(evt) {
  // Очистить ввод после удаления последнего символа
  const inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.keyCode === 8 && inputValue.length === 1) {
    evt.target.value = '';
  }
}


export {phoneInputs, onPhoneKeyDown, onPhoneInput, onPhonePaste};
