// Сравнение операндов
console.log(2 == 2);
// true
console.log(3 == 6);
// false
console.log('2' == 2);
// true
console.log(2 === 2);
// true
console.log('2' === 2);
// false
console.log(3 !== 2);
// true
console.log('3' != 3);
// false
console.log('3' !== 3);
// true

console.log(1 === '1');
// false
console.log(1 == false);
// false
console.log(null !== 1);
// true

let age = 20;
console.log(age++);  // 20
console.log(++age);  // 22
console.log('Привет' + ' как дела');
console.log('Привет' + age);
console.log(`Привет, твой возраст ${age} лет.`)  // backticks

alert('Hello');
prompt('Сколько вам лет?');
prompt('Сколько вам лет?', 30);  // со значением по умолчанию
confirm();  // да/нет -> возвращает true/false

// Вложенные условия 'if' -> 'else'
let userAnswer = prompt('Зимой и летом одним цветом');
if (userAnswer === '') {
    console.log('Пусто')
} else {
    if (userAnswer==='елка') {
        alert('Молодец')
    } else {
        alert('Не угадал')
    }
}

// Использование 'else if'
let userAnswer = prompt('Зимой и летом одним цветом');
if (userAnswer === '') {
    alert('Пустое значение');
} else if (userAnswer.toLowerCase() == 'елка') {
    alert('Молодец');
} else {
    alert('Не угадал');
}

// Тернарный оператор
// alert((2>3)) ? 'скидки' : 'нет скидокж'

let userAnswer = prompt('Зимой и летом одним цветом');
// (userAnswer === 'елка') ? alert('Молодец') : alert('Не угадал');
alert((userAnswer === 'елка') ? 'Молодец' : 'Не угадал');

Введение в браузерные события
см. код в html

// Приведение типов
let age = '20';
console.log(age);
console.log(typeof(age));  // string
console.log(age-5);  // 15 -> JS автоматически преобразовал age в int
console.log(age)  // '20' -> age всё ещё string
console.log(age+1);  // '201' -> JS совершил конкатенацию
// Необходимо использовать явное преобразование типов
// Вариант 1
let pass = prompt('Введите пароль:');  // '123'
pass = Number(pass);  // Преобразование в цифру
pass = String(pass);  // Преобразование в строку
if (pass==123) {
    alert('Проходим дальше');
} else {
    alert('Дальше нельзя');
}
// Вариант 2
let pass = Number(prompt('Введите пароль'));
alert((pass==123) ? 'Проходим дальше' : 'Дальше нельзя');