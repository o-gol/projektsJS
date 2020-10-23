'use strict';
// localStorage.setItem(`number`,5);
// //localStorage.removeItem(`number`);
// localStorage.clear();
// console.log(localStorage.getItem(`number`));

const checkbox =document.querySelector(`#checkbox`);
const form=document.querySelector(`form`);
const change=document.querySelector(`#color`);

if (localStorage.getItem(`isChecked`)==`true`){
    checkbox.checked=true;
}//else{
//     checkbox.checked=false;
// }

if (localStorage.getItem(`color`)){
    form.style.backgroundColor=`red`;
    
}


checkbox.addEventListener(`change`,()=>{
    if(checkbox.checked==true){
    localStorage.setItem(`isChecked`,true);
    }else if(checkbox.checked==false){
        localStorage.setItem(`isChecked`,false);
    }
});


change.addEventListener(`click`,()=>{
    if (localStorage.getItem(`color`)){
        form.style.backgroundColor=`white`;
        localStorage.removeItem(`color`);
    }else{
        form.style.backgroundColor=`red`;
        localStorage.setItem(`color`,`red`);
    }
});


const person={
    name : `Alex`,
    age: 23,
}
console.log(JSON.stringify(person));

const serializedPerson=JSON.stringify(person);
localStorage.setItem(`alexPerson`,JSON.stringify(person));
console.log(localStorage.getItem(`alexPerson`));
console.log(JSON.parse( localStorage.getItem(`alexPerson`)));