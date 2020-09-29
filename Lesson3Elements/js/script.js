'use strict';

const box=document.getElementById("box");
const buttons=document.getElementsByTagName("button");
const circles=document.getElementsByClassName(`circle`);
const hearts=document.querySelectorAll(`.heart`);
const firstHeart=document.querySelector(`.heart`);
const wrapper=document.querySelector(`.wrapper`);
console.dir(box);
box.style.background=`blue`;
box.style.width=`500px`;


buttons[0].style.borderRadius=`100%`;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.cssText=`background-color: #000; width: 200px`; 
}
 


 
for (let i = 0; i < circles.length; i++) {
    circles[i].style.cssText=`background-color: #000; width: 200px`;
}


hearts.forEach((item)=>{
    item.style.cssText=`background-color: blue;`;
});


const div=document.createElement(`div`);
div.classList.add(`black`);
wrapper.append(div);