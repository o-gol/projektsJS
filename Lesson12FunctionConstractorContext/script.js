// function User(name,id){
//     this.name=name;
//     this.id=id;
//     this.human=true;
//     this.hello=function(){
//         console.log(`Hello, ${name} !`);
//     };

// }
// const ivan=new User(`Ivan`,28);
// const alex=new User(`Alex`,20);
// console.log(ivan);
// console.log(alex);
// alex.hello();
// ivan.hello();
// User.prototype.exit=function(){
//     console.log(`${this.name} exit`);
// };
// ivan.exit();





"use strict";

// function showThis(a,b){
//     console.log(this);
//     function summ() {
//         console.log(this);
//         return a+b;
        
//     }
//     console.log(summ());
// }

// showThis(4,5);

const obj={
    a:20,
    b:15,
    summ: function(){
        console.log(this);
        function shout(){
            console.log(this);
        }
        shout();
    }


};

obj.summ();

// function User(name,id){
//     this.name=name;
//     this.id=id;
//     this.human=true;
//     this.hello=function(){
//         console.log(`Hello, ${name} !`);
//     };

// }
// const ivan=new User(`Ivan`,28);

function sayName(surname){
    console.log(this);
    console.log(this.name+` `+surname);
}
const user={
    name:`John`
};

sayName.call(user,`Smith`);
sayName.apply(user,[`Dorian`]);

function count(num){
    return this*num;
}

const double=count.bind(2);
console.log(double(13)); 
console.log(double(3)); 


//1) обычная функция this=window, но если "use strict" то this=undefined
//2) контекст у методов объекта - сам объект
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) ручная привязка this: call, apply, bind
//-------------------------------------------------------------
//----------Здесь при написании callback  функции в класическом виде function(){}
//------------------------ this это сам элемент страницы
const btn=document.querySelector(`button`);
btn.addEventListener(`click`, function(){
    console.log(this);
    this.style.backgroundColor=`red`;
});
//---------------------------------------------------------------
const obj1={
    num: 5,
    sayName: function(){
        const say = ()=>{
            console.log(this);
        };
        say();
    }

};

console.log(obj1);
obj1.sayName();

