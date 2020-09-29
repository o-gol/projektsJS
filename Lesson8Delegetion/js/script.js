const btns=document.querySelectorAll(`button`),
wrapper=document.querySelector(`.btn-block`);
console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.add(`red`));
//console.log(btns[0].classList.remove(`red`));
console.log(btns[0].classList.remove(`some`));
console.log(btns[0].classList.remove(`blue`));
console.log(btns[0].classList.add(`blue`));
console.log(btns[0].classList.toggle(`red`));
console.log(btns[2].classList.add(`blue`));
console.log(btns[2].classList.add(`red`));


if(btns[2].classList.contains(`red`)){
    console.log(`red`);
}
if(btns[2].classList.contains(`blue`)){
    console.log(`blue`);
}

btns[0].addEventListener(`click`,(e)=>{

        if(btns[2].classList.contains(`red`)){
            btns[2].classList.remove(`red`);
            
        }else{
            btns[2].classList.add(`red`);
        }

});

wrapper.addEventListener(`click`,(e)=>{
    //console.log(e.target);
    if(e.target&&e.target.matches`button.red`){
        console.log(`hello home`);
    }

});
const btn=document.createElement(`button`);
btn.classList.add(`red`);
wrapper.append(btn);