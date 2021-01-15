// const timerId = setTimeout(function() {    // - перший аргумент - це функція, 
//     console.log('Hello');                  // - а другим аргументом вказуємо затримку(через скільки часу вона виконається)          
// }, 2000);                                   // - виконається через 2 секунди (2000 мс)


// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');         // - Записали третім аргументом "Hello" який по синиаксису перейде в функцію ака запускається в середині setTimeout-а


// const timerId = setTimeout(logger, 2000);   // - Першим аргументом задається готова функція яка виконається через 2с 

// function logger () {
//     console.log('text');
// }


// const btn = document.querySelector('.btn');
// let timerId,             // - Створили ГЛОБАЛЬНУ змінну timerId щоб її бачили всі функції 
//     i = 0;    // - Змінна Ітератор (Лічильник)

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 2000); // - Функція logger виконується завжди після кліку з інтервалом 2 сек
// });

// function logger () {
//     if (i === 3) {                 // - Якщо і = 3, то ми запускаємо clearInterval який зупинить цей безкінечний цикл
//         clearInterval(timerId);    // - Функція яка зупиняє setTimeout та setInterval
//     }
//     console.log('text');
//     i++;                   // - Змінну і кожного разу збільшуємо на 1



// let interval = setTimeout(function hi(){   // - Працює як setInterval, але завжди буде чекати відведений йому час 0,5сек
//     console.log('Hello');
//     interval = setTimeout(hi, 500);
// }, 500);



// const btn = document.querySelector('.btn');

// function myAnimation() {
//     const elem = document.querySelector('.box');  // - Створили змінну для квадрата 
//     let pos = 0;                                  // - // - Створили змінну для позиції

//     const id = setInterval(frame, 10);  // - Запускажмо функцію frame і вказуємо затримку 10мс
//     function frame() {
//         if (pos == 300) {          // - кінечне значення 300px і анімація має зупинитись
//             clearInterval(id);    // - Зупиняємо анімацію (setInterval під змінною id) коли вона достигла 300 пікселів! 
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';    // - Вказуємо що при кожному кроці анімації ми будемо змінювати TOP. Кажемо що сюда приходить поточна позиція + піксель
//             elem.style.left = pos + 'px';   // - Теж саме і для ЛІВА
//         }
//     }
// }

// btn.addEventListener('click', myAnimation); // - Після кліку запускається функція myAnimation