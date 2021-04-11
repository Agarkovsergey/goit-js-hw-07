// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const newElem = (name) => {
    const itemArr = [];
    ingredients.forEach((name) => {
        const ingredientsRef = document.createElement('li');
        ingredientsRef.textContent = name;
        itemArr.push(ingredientsRef);
    })
    return itemArr;
}

document.querySelector('#ingredients').append(...newElem());