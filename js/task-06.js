// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validationInput = document.querySelector('#validation-input');

function onInputBlur() {
    const textLength = validationInput.value.length;
    const validLenght = parseInt(validationInput.getAttribute('data-length'));
    if (textLength === validLenght) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}

validationInput.addEventListener('blur', onInputBlur);