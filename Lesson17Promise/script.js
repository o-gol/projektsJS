`use strict`;

console.log(`Запрос данных...`);
const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(`Данные готовятся...`);
        const product = {
            name: `TV`,
            price: 2000
        };

     resolve();   
    }, 2000);

    

});

req.then(()=>{
    console.log(`Данные полученны...`);
});

setTimeout(() => {
            product.status = `order`;
            console.log(product);
        }, 2000);