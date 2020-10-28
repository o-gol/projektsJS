'use strict';
const ans1=prompt(`insert name`);
const reg1=/n/gi
console.log(ans1.search(reg1));
console.log(ans1.match(reg1));
const pass=prompt(`Password`);

console.log(pass.replace(/./g,"*"));
console.log(pass.replace(/\./g,"*")); // спецсимвол экранирования  обратный слэш( \ )
console.log(pass.replace(/-/g,":"));

const ans2=prompt(`insert name`);
const reg2=/\d/gi;
console.log(reg2.test(ans2));
console.log(ans2.match(reg2));
// \d -ищем цифры
// \w -ищем буквы
// \s -ищем пробелы

const str=`My name R2d2`;

console.log(str.match(/\w\d\w\d/ig));//есть разница в 
console.log(str.match(/\w\d\w\d/i));//                вывод данных

// \D -ищем не цифры
// \W -ищем не буквы
// \S -ищем не пробелы

console.log(str.match(/\D/ig));