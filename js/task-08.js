// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('[type="number"]');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
if (!inputRef.hasAttribute('max')) {
    inputRef.setAttribute('max', 100);  
}
const maxValue = +inputRef.getAttribute('max');


// const randomRGB = () => {
//     const colorRefArr = [];
//     for (let i = 0; i < 3; i++) {
//         colorRefArr.push(Math.floor(Math.random() * 255));
//     }
//     let colorRef = colorRefArr.join(', ')
//     return `rgb(${colorRef})`;
// }

const randomRGB = () => {    
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}
// const createBox = (amount) => {
//     if (amount > maxValue) {
//         alert (`You have to set amount less ${maxValue}`);
//         return '';
//     }
//     const elems = [];
//     let countSize  = 30;
//         for (let i = 0; i < amount; i++){
//             const newElem = document.createElement('div');
//             newElem.setAttribute(
//                 'style',
//                 `width: ${countSize}px; height: ${countSize}px; background-color: ${randomRGB()}`
//             );
//             elems.push(newElem);
//             countSize +=10;
//         }
//     return elems;
// }

const createBox = (amount) => {
    if (amount > maxValue) {
        alert(`You have to set amoun less ${maxValue}`);
        return '';
    }    
    return Array(Number(amount)).fill().reduce((acc, item, index) => {
        const beginSize = 30;
        const newElem = document.createElement('div');
        newElem.setAttribute(
            'style',
            `width: ${beginSize + (index * 10)}px; height: ${beginSize + (index * 10)}px; background-color: ${randomRGB()}`
        );
        acc.push(newElem);
        return acc
    }, [])
}


let dataInput = 0;
inputRef.value = dataInput;
inputRef.addEventListener('change', (e) => {
    dataInput = e.currentTarget.value;
});

renderRef.addEventListener('click', () => boxesRef.append(...createBox(dataInput)));
destroyRef.addEventListener('click', () => {
    boxesRef.querySelectorAll('div').forEach(item => item.remove());
    dataInput = 0;
    inputRef.value = dataInput;
})
