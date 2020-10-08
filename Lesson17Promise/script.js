// `use strict`;

// console.log(`Запрос данных...`);
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log(`Данные готовятся...`);
//         const product = {
//             name: `TV`,
//             price: 2000
//         };

//      resolve(product);   
//     }, 2000);

    

// });

// req.then((product)=>{

//     return new Promise((resolve, reject)=>{
        
//         setTimeout(() => {
//             console.log(`Данные изменяются...`);
//             product.status = `order`;
//             //console.log(product);

//             resolve(product);
//         }, 2000);
//     });
// }).then((data)=>{
        
//     //setTimeout(() => {
//         console.log(`Данные полученны...`);
//         data.modify=true;
//         //console.log(data);
//         return data;
        
//     //}, 2000);
// }).then((data)=>{
//     console.log(`Окончательные данные`);
//     console.log(data);

// }).catch(()=>{
//     console.error(`Произошла ошибка..`);
// }).finally(()=>{
//     console.log(`Finally`);

// });

//-------------------------------------------------------------------

// `use strict`;

// console.log(`Запрос данных...`);
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log(`Данные готовятся...`);
//         const product = {
//             name: `TV`,
//             price: 2000
//         };

//      resolve(product);   
//     }, 2000);

    

// });

// req.then((product)=>{

//     return new Promise((resolve, reject)=>{
        
//         setTimeout(() => {
//             console.log(`Данные изменяются...`);
//             product.status = `order`;
//             //console.log(product);

//             resolve(product);
//         }, 2000);
//     });
// }).then((data)=>{
//         return new Promise((resolve, reject)=>{
// setTimeout(() => {
//         console.log(`Данные полученны...`);
//         data.modify=true;
//         //console.log(data);
//         resolve(data);
        
//     }, 2000);
//         });
    
// }).then((data)=>{
//     console.log(`Окончательные данные`);
//     console.log(data);

// });

//------------------------------------------------------------------------------





const test=(time)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve(),time);
    });

};


//test(1000).then(()=>console.log(`1000ms`));
//test(2000).then(()=>{console.log(`2000ms`);});

Promise.all([test(1000),test(4000)]).then(()=> console.log(`All.all`));
Promise.race([test(1000),test(4000)]).then(()=> console.log(`All.race`));


//------------------------------------Fetch API

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));


  const userJohn ={
      name: `John`,
      age: 17

  };

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: `POST`,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userJohn)
}).then(response => response.json())
  .then(json => console.log(json));


 