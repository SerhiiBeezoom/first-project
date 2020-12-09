"use strict";

// const user = "Serhii";

// alert(`Привет, ${user}`);


//  console.log (2 + 2 *2 !== 6);  --- 6 не дорівнює 6 (False)
//  console.log (6 == '6');        --- 6 дорівнює "6" (True) Не строге зрівнювання
//  console.log (2*4 === '8');     --- 8 строго дорівнює "8" (False) ("8" - строка)


// ~~~~~~~~~~> 12. Практика ч.1. Починаємо створювати додаток


// const numberOfFilms = prompt('Скільки фільмів?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


 // const a = prompt('Один з останніх фільмів?', ''),
 //       b = prompt('Яка оцінка?', ''),
 //       c = prompt('Один з останніх фільмів?', ''),
 //       d = prompt('Яка оцінка?', '');


 // personalMovieDB.movies[a] = b;
 // personalMovieDB.movies[c] = d;

 // console.log(personalMovieDB);



// ~~~~~~~~~~> 13. Умови


// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


//  const num = 50;
//  if (num < 49) {
//      console.log('Мало');
//  } else if (num > 100) {
//      console.log('Багато');
//  } else {
//          console.log('ok');
//      }


//      (num === 50) ? console.log('OK!') : console.log('Error');
//     const num = 50;
    
//     switch (num) {
//         case 49:
//             console.log('Neverno');
//             break;
//         case 100:
//             console.log('Neverno');
//             break;
//         case 50:
//             console.log('Verno');
//             break;
//         default:
//             console.log('Ne v etot raz');
//             break;
//     }



// ~~~~~~~~~~> 14. Цикли 


// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }


// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// let num = 50;

// for (let i = 1; i < 3; ++i) {
//     console.log(i);
//     console.log(num);
//     num++;
// }


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }

//     console.log(i);
// }



// ~~~~~~~~~~> 15. Практика ч2. Застосовуємо умови і цикли


// let numberOfFilms = prompt('Скільки фільмів?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один з останніх фільмів?', ''),
//           b = prompt('Яка оцінка?', '');


//      if (a != null && b != null && a !=  '' && b != '' && a.length < 50) {

//         personalMovieDB.movies[a] = b; 

//      } else {
//          i--;
//      }  
// }


// if (personalMovieDB.count < 10) {
//     console.log('Мало фільмів');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Класичний глядач');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Ви кіноман');
// } else {
//     console.log('Помилка');
// }

// console.log(personalMovieDB);


// ------------------- 2 спосіб зза допомогою циклів
// let i = 1;

// do {
//     const a = prompt('Один з останніх фільмів?', ''),
//           b = prompt('Яка оцінка?', '');
//           i++;
// }
// while (i < 3);


// ------------------- 3  спосіб зза допомогою циклів
// let i = 1;

// while (i < 3) {
//     const a = prompt('Один з останніх фільмів?', ''),
//           b = prompt('Яка оцінка?', '');
//           i++;
// }



// ~~~~~~~~~~> 16. Функції, стрілочні функції (ES6)


//  ~~~> [Function Declaration] - Створюється до початку виконання скрипту, можна викликати перед оголошенням. 
// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello World');


//  let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);


// function calc (a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(8, 2));
// console.log(calc(15, 4));


// function ret () {
//     let num = 50;
//     return num;

// }


// const anotherNum = ret();
// console.log(anotherNum);


//  ~~~>[Function expression] - Створюється тільки тоді, 
// коли доходить потік коду, 
// можна визвати тільки після оголошення.

// const logger = function() {
//     console.log('Hello!');

// };

// logger();


// ~~~>[Стрілочна функція] - Не має свого контексту (this) (Не має контексту виклику)

// const calc = (a, b) => a + b;


// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };



// ~~~~~~~~~~> 17. Методи і властивості рядків і чисел


// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length); - виведе  4 (4 символи)
// console.log(arr.length); - виведе 3 (3 елемента в середині масиву)


// const str = "test";

// console.log(str[2]); - виведе s (s - третій символ строки "test")


// const str = 'test';

// console.log(str.toUpperCase()); - метод який виводить нове значення в верхньому реєстрі"TEST" 


// const str = 'teSt';

// console.log(str.toLowerCase()); - метод який виводить нове значення в нижньому реєстрі "test" 


// const fruit = "Some fruit";

// console.log(fruit.indexOf('fruit')); - метод який покаже з якої позиції починається строка 'fruit'
// (виведе число 5)


// const logg = 'Hello World';

// console.log(logg.slice(6, 11));  - Метод який повертає щось з строки (6 - починаючи з 6 символа включно і до 11, 10 включно) - виведе "World"
// console.log(logg.substring(6, 11)); - то саме +-


// const logg = 'Hello Wolrd';

// console.log(logg.substr(6, 5)); - Метод який кусочок строки (6 - починаючи з 6 символа, 5 - кількість символів) - виведе "World"


// const num = 12.2;

// console.log(Math.round(num)); - Метод який округляє число - Виведе число 12


// const test = "12.2px";

// console.log(parseInt(test)); - Метод який перетворєю строку в числовий тип даних (заокруляє) - Виведе число 12


// const test = "12.2px";

// console.log(parseFloat(test)); - Метод який перетворєю строку в числовий тип даних  - Виведе число 12.2



// ~~~~~~~~~~> 18. Практика ч3. Використовуємо функції


// let numberOfFilms;


// function start() {
//     numberOfFilms = +prompt('Скільки фільмів?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скільки фільмів?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };


// function rememberMyFilms() {

//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один з останніх фільмів?', ''),
//               b = prompt('Яка оцінка?', '');
    
    
//          if (a != null && b != null && a !=  '' && b != '' && a.length < 50) {
    
//             personalMovieDB.movies[a] = b; 
//             console.log('done');
    
//          } else {
//              console.log('Помилка');
//              i--;
//          }  
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Класичний глядач');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Ви кіноман');
//     } else {
//         console.log('Помилка');
//     }
// }

// detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);

//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {

//     for (let i = 0; i < 3; i++) {
//         const genresNumber = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
        
//         personalMovieDB.genres[i] = genresNumber;

//     }
    
// }

// writeYourGenres();



// ~~~~~~~~~~> 19. Callback - Функції


// function learnJS(lang, callback) {
//     console.log(`Я вчу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я пройшов цей урок!');
// });



// ~~~~~~~~~~> 20. Об'єкти, деструктуризація об'єктів (ES6)


// ~~~> Object.keys - створює масив в якому всі ключі нашого обЄкту. ([ 'name', 'width', 'height', 'colors' ])
// ~~~> console.log(Object.keys(options).length); - Виведе число 4 (4 ключа в обЄкті)
// ~~~> const {border, bg} = options.colors; - Деструктурізація (Витягує Border i bg з обєкта)


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Властивість ${key} має значення ${options [key] [i]}`);
//            
//         }
//     } else {
//         console.log(`Властивість ${key} має значення ${options[key]}`);
//         
//     }
// }



// ~~~~~~~~~~> 21. Масиви і псевдомассиви


//~~~> pop - Метод який забирає останній елемент з масиву
//~~~> push -  Метод який додає елемент в кінець масиву


// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {   //- Цикл for of працює тільки з масивами, строкою, псевдомасив і mep/set.
//     console.log(value);
         
// }


// const arr = [1, 2, 3, 6, 8, 10];
// arr[99] = 0;             //- Добавили до массиву число 99
// console.log(arr.length); //- Виведе 100 (Властивість length складається з останнього індексу і додоє до нього +1)


// const arr = [1, 2, 3, 6, 8, 10];

// arr.forEach(function(item, i, arr) {   //- Метод який має в собі КолБек функцію->
//     console.log(`${i}: ${item} всередині масиву ${arr}`); //         ->дозволяє перебрати всі елементи масиву
// });


// const str = prompt("","");
// const products = str.split(', '); // - Метод який перетворює строку в масив (через кому , )
// product.sort();        // - Метод сортування (Сортує елементи які в середині масиву як СТРОКУ)
// console.log(products.join(';'));  // - Метод який перетворює масивв  строку (через ;)


// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {     // - Функція яка  сортує числа, має в собі алгоритм скорого сортування (return a - b)
//     return a - b;
// }

// - Псевдомасив - це ОБ`ЄКТ структура якого співпадає із структурою масиву, АЛЕ в них НЕ буде ніяких методів ! 
// - Псевдомасив - структура яка зберігає дані по порядку !



// ~~~~~~~~~~> 22. Передача за посиланням або за значенням, Spread оператор (ES6-ES9)


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //(ССИЛКА) Ми створили ссилку цього обЄкта, а не копію.

// copy.a = 10; // Модифікуємо наш початковий обЄкт, а не копію.

// console.log(copy);
// console.log(obj);  



// const obj = {
//     a: 5,
//     b: 1
// };

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);



// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);



// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();    // Створили копію массиву зза допомогою .slice()

// newArray[1] = 'uhsdbfusdbf';      // Змінили ДРУГЕ значення масиву ('b' на 'uhsdbfusdbf')

// console.log(newArray);
// console.log(oldArray);



// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];   // В масив internet вставляємо video i blogs та свої vk/fc

// console.log(internet);



// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);



// const array = ['a', 'b'];

// const newArray = [...array];

// console.log(newArray);



// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};



// ~~~~~~~~~~> 23. Основи ООП, прототипно-орієнтоване спадкування


// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));        // Це рядок  (string)
// console.log(typeof(strObj));     // Це об'єкт (object) 


// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier); //Створює прототип jonh який успадковується від soldier

// jonh.sayHello();

// Object.setPrototypeOf(jonh, soldier);   // Встановлює прототип (працює в динаміці коли Jonh вже існував)



// ~~~~~~~~~~> 24. Практика ч4. Використовуємо об'єкти


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,

//     start: function() {
//         personalMovieDB.count = +prompt('Скільки фільмів?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Скільки фільмів?', '');
//         }
//     },

//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один з останніх фільмів?', ''),
//                   b = prompt('Яка оцінка?', '');
        
        
//             if (a != null && b != null && a !=  '' && b != '' && a.length < 50) {
        
//                 personalMovieDB.movies[a] = b; 
//                 console.log('done');
        
//             } else {
//                  console.log('Помилка');
//                  i--;
//             }  
//         }
//     },

//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Мало фільмів');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Класичний глядач');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Ви кіноман');
//         } else {
//             console.log('Помилка'); 
//         }
//     },

//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },

//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;

//         } else { 
//             personalMovieDB.privat = true;
//         }
//     },

//     writeYourGenres: function() {
//         for (let i = 0; i < 3; i++) {
//             let genres = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
            
//             if (genres == '' || genres == null ) {
//                 console.log('Ви ввели некоректні дані або не ввели їх зовсім');
//             } else {
//                 personalMovieDB.genres[i] = genres;
//             }
//         }  
    
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Улюблений жанр ${i + 1} - це ${item}`);
//         });
//     }
// };



// ~~~~~~~~~~> 25. Відловлюємо помилки в своєму коді за допомогою консолі розробника. Breakpoints

// Заходимо в консоль розробника (На html сторінці, пкм - переглянути код - Sources )


// function hello() {
//     console.log('Hello World');
// }

// hello();

// function hi() {
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);



// ~~~~~~~~~~> 26. Динамічна типізація в JS


// To String

// 1) - Спосіб
// console.log(typeof(String(null)));


// 2) - Спосіб
// console.log(typeof(5 + ''));    // - При додаванні з рядком, у нас всеодно виходить рядок

// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';   // - Виходить рядок який можна помістити в стилі 26px


// To Number

// 1) - Спосіб
// console.log(typeof(Number('4')));


// 2) - Спосіб
// console.log(typeof(+'4'));   // - Зза допомогою унарного + ми перетворюємо рядок 4 на число 4


// 3) - Спосіб
// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt('Hello', '');


// To Boolean

// 0, '', null, undefined, NaN; - Все перетворюється в False


// 1) - Спосіб
// let switcher = null;

// if (switcher) {
//     console.log('Working...');   // - Не виконається тому що switcher = null(FALSE)
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');   // - Тут вже switcher = 1 (TRUE)
// }


// 2) - Спосіб
// console.log(typeof(Boolean('4')));

// 3) - Спосіб
// console.log(typeof(!!"15918165"));   // - Два знака !!(заперечення) перетворило рядок в Булінове значення



// ~~~~~~~~~~> 27. Завдання з співбесід на розуміння основ


// Какое будет выведено значение: let x = 5; console.log( x++ ); ?
//~~~> 5 
// x++  - постфіксна форма запису інкременту, спочатку об'являється х(5), а потім додаємо 1

// Чему равно такое выражение: [] + false - null + true ?
//~~~> NaN
// console.log([] + false); = 'false'(false - це строка, тому що ми складуємо пусту строку([]) з іншим типом даних, 
// то ми получаємо строку)
// console.log(false - null + true); = NaN - значення яке получається при виконанні НЕ матиматичних операцій

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//~~~> 2 
// 2 просвоїли "у", а "у" просвоїли "х"

// Чему равна сумма [] + 1 + 2?
//~~~> 12 
// Все виводиться у вигляді строки  - Пустий об'єкт не виводиться і перетворює (конкатенує) 1 і 2 у строку = "12"

// Что выведет этот код: alert("1"[0])?
//~~~> 1
// [0] - це індекс . Виведе перший символ, тобто 1 який під номером 0.

// Чему равно 2 && 1 && null && 0 && undefined ?
//~~~> null 
// Оператор && затинається на False, повертає його зза допомогою return і не йде далі

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
//~~~> false
// Два знаки !! перетворює слідуєчий вираз в Boolean 
// Boolean  не дорівнює (a && b)

// Что выведет этот код: alert(null || 2 && 3 || 4); ?
//~~~> 3 
// По приорітету перше виконується 2 && 3(поверне 3), Оператор || завжди затинається на True і не йде далі

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//~~~> false (a !== b)
// 'a' i 'b' - це 2 масива які мають в собі однакові значення - 1, 2, 3

// Что выведет этот код: alert(+"Infinity"); ?
//~~~> Infinity
// (+"Infinity") - Унарний плюс претворює строку на числовий тип даних

// Верно ли сравнение: "Ёжик" > "яблоко"?
//~~~> false
// Особливість Юнікоду

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
//~~~> 2



// ~~~~~~~~~~> 28. Отримання елементів зі сторінки


// const box = document.getElementById('box'); // - Получає унікальний документ по унікальному ідентифікатору
// console.log(box);

// const btns = document.getElementsByTagName('button'); // - Получає  HTML колекцію, тобто всі кнопки зі сторінки
// console.log(btns[0]);   // - Получає  першу кнопку зі сторінки

// const circles = document.getElementsByClassName('circle');

// const hearts = document.querySelectorAll('.heart'); // Коли ми працюємо з селекторами нам потрібно ставити крапку (.heart)
                                                        //  для того щоб знайти елемент по КЛАСУ (або по ID - #)
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); // - Получає перший елемент який папався йому під селектор('.heart')
// console.log(oneHeart);



// ~~~~~~~~~~> 29. Дії з елементами на сторінці


// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),         // - В мене вже є такий батько (wrapper)
//       hearts = wrapper.querySelectorAll('.heart'),           
//       oneHeart = wrapper.querySelector('.heart');       // - змінні hearts та oneHeart - в середині елементу wrapper по селектору ('.heart')
  
   // box.style.backgroundColor = 'blue';
   // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px'; // -  Властивість cssText дозволяє задати CSS стилі масово одним рядком
//                                                             // -  Вище записано двома рядками
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div'); // - Створює елемент 'div' тільки в JS
 
// div.classList.add('black'); // - Добавили до оболочки 'div' клас 'black'


   // document.body.append(div); // - Ставить елемент 'div' в кінці 'body' 
   // document.querySelector('.wrapper').append(div); // - Ставить елемент 'div' в кінці селектору 'wrapper'
   
   // wrapper.append(div); // - Переніс wrapper в верх в КОРОБКУ (const box), тому я зараз пропишу так
// wrapper.appendChild(div); // - Устарівша конструкція !

   // wrapper.prepend(div); // - Ставить елемент 'div' перед селектором 'wrapper'
   // hearts[0].before(div); // - Ставить елемент 'div' перед першим елементом 'hearts[0]'
   // hearts[0].after(div); // - Ставить елемент 'div' після першого елементу 'hearts[0]'
// wrapper.insertBefore(div, hearts[1]) // - (Устарівша конструкція!) Ставить елемент 'div' перед другим елементом 'hearts[1]'

   // circles[0].remove(); // - Видаляє перший елемент circles[0]
// wrapper.removeChild(heartsp[1]);  // - Устарівша конструкція ! (Нам приходилось получати батьків(wrapper) цього елементу)

   // hearts[0].replaceWith(circles[0]); // - Заміняє елемент hearts[0], елементом circles[0]
// wrapper.replaceChild(circles[0], hearts[0]) // - Устарівша конструкція !


// div.innerHTML = "Hellow World"; // - Вставили в наш елемент (чорний блок) 'div' текст "Hellow World"
// div.innerHTML = '<h1>Hellow World</h1>'; // - МЕТОД зза допомогою якого ми можемо вставляти HTML структуру в наш елемент

// div.textContent = 'Hello'; // - Цей МЕТОД працює тільки з текстом ! Вставили в елемент 'div' текст 'Hello'

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // - Вставили наш HTML код перед елементом 'div' зза допомогою('beforebegin')
// Ще ТРИ Варіанти --->  ('afterbegin'(в початок)'beforeend'(перед кінцем)'afterend'(після елементу)



// ~~~~~~~~~~> 30. Практика. Завдання на відпрацювання дій зі сторінкою


// const movieDB = {
//    movies: [
//        "Логан",
//        "Лига справедливости",
//        "Ла-ла лэнд",
//        "Одержимость",
//        "Скотт Пилигрим против..."
//    ]
// };

// const promoADV = document.querySelectorAll('.promo__adv img'),
//      newGenre = document.querySelector('.promo__genre'),
//      newBG = document.querySelector('.promo__bg'),
//      newList = document.querySelector('.promo__interactive-list');

// promoADV.forEach(item => {
//    item.remove();
// });

// newGenre.textContent = "драма";

// newBG.style.backgroundImage = 'url("img/bg.jpg")';

// newList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//    newList.innerHTML += `
//        <li class="promo__interactive-item">${i + 1} ${film}
//            <div class="delete"></div>
//        </li>
//    `;
// });



// ~~~~~~~~~~> 31. Події та їх обробники


// const btn = document.querySelector('button');


// btn.addEventListener('click', (e) => {   // - 'click'(назва події) Спочатку виконується 'click', а вже потім кол бек функція (e) => { alert('Click'); )};
//    alert('Click');
// });


// btn.addEventListener('mouseenter', (e) => {  // - mouseenter - hover(наведіть курсор) (e) це  об'єкт події який завжди передається першим аргументом
//    console.log(e.target);    // - Виводить в консоль btn елемент (кнопку з HTML)
//    e.target.remove(); // - Видаляє кнопку коли ми НАВОДИМО ('mouseenter') на кнопку! 
//    console.log('Hover');
// });


// let i = 0;
// const deleteElement = (e) => {
//    console.log(e.target);
//    i++;
//    if (i == 1) {
//       btn.removeEventListener('click', deleteElement); // - Спрацювала умова. Коли ми 2 раз нажмемо на кнопку, не виведе другий раз кнопку HTML button
//    }
// };

// btn.addEventListener('click', deleteElement); // - Після того як ми нажмемо('click') в нас виконається функція(deleteElement) виведе в консоль обєкт button


// const link = document.querySelector('a');  // - має в собі ссилку на ютуб

// link.addEventListener('click', function(event) {
//    event.preventDefault();     // - Відміняє стандартну поведінку (перехід по ссилці)

//    console.log(event.target); // = Виводить в консоль елемент (const link) ссилку
// });


// const element = (e) => {
//    console.log(e.target);
//    console.log(e.type);
// };

// const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//    btn.addEventListener('click', element, {once: true}); // - once Це опція яка вказує що ця подія має виконуватись тільки 1 раз!
// });


