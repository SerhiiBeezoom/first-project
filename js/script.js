'use strict';

// const now = new Date();
// new Date.parse('2021-01-15'); // - Створити дату 

// console.log(now.setHours(18));     // - setHours() Метод який змінює годину, але в VS Code він орієнтується на UTC і покаже 16:00 а не 18:00
                                   // - А в браузері покаже 18:00


// console.log(now.getFullYear());  // - getFullYear() Метод який виводить поточний рік - 2021
// console.log(now.getMonth());     // - getMonth() Метод який виводить поточний місяць (Наприклад число 7 = Червень) починаючи з 0
// console.log(now.getDate());      // - getDate() Метод який виводить поточний день місяця з 1 по 31
// console.log(now.getHours());     // - getHours() Метод який виводить поточну годину 
// console.log(now.getDay());       // - getDay() Метод який виводить поточний день тижня (0 = неділя)
// console.log(now.getUTCHours());  // - getUTCHours() Метод який виводить годину по UTC +0

// console.log(now.getTimezoneOffset());  // - getTimezoneOffset() Метод який получає різницю в ХВ між місцевим часом і UTC


// let start = new Date();   // - Змінній start присвоїли поточну дату

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;               // - i кожного разу зводити в 3 степінь
// }

// let end = new Date();   // - Змінній end присвоїли нову дату, вже після нашого циклу

// alert(`Цикл відпраццював за ${end - start} міллісекунд`);   // - Відняли від кінцевого часу початковий (показує в мс)