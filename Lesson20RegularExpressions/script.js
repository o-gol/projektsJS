'use strict';
// const ans=prompt(`insert name`);
// const reg=/n/gi
//console.log(ans.search(reg));
//console.log(ans.match(reg));
// const pass=prompt(`Password`);

// console.log(pass.replace(/./g,"*"));
// console.log(pass.replace(/\./g,"*")); // спецсимвол экранирования  обратный слэш( \ )
// console.log(pass.replace(/-/g,":"));

// const ans=prompt(`insert name`);
// const reg=/\d/gi;
// console.log(reg.test(ans));
// console.log(ans.match(reg));
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