// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameOutputRef = document.querySelector('#name-output');
const nameInputRef = document.querySelector('#name-input');
const changeName = (e) => {
     let txtResult = e.currentTarget.value
    if (txtResult) {
        nameOutputRef.textContent = txtResult;
     } 
    else {
        nameOutputRef.textContent = 'незнакомец';
    }
}



nameInputRef.addEventListener('input', changeName)




