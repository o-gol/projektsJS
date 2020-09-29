const box=document.querySelector(`.box`),
button=document.querySelector(`button`);
//console.dir(button);
console.dir(box.scrollHeight);
console.dir(box.clientHeight);

const heightBox=box.scrollHeight+100;
    box.style.height=heightBox+`px`;
    box.style.height=box.scrollHeight+`px`;


button.addEventListener(`click`,()=>{
    // const heightBox=box.scrollHeight+100;
    // box.style.height=heightBox+`px`;
    //box.style.height=box.scrollHeight+`px`;
    console.log(box.scrollTop);
    console.log(box.scroll);
    document.documentElement.scrollTop=0;
    
});


//console.log(box.getBoundingClientRect().top);
const style=window.getComputedStyle(box);
//console.dir(style);
//console.log(style.display);
console.log(document.documentElement.scrollTop);
document.documentElement.scrollTop=500;
console.log(document.documentElement.scrollTop);