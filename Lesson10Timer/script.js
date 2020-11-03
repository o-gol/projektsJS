
const btn=document.querySelector(`.btn`),
box=document.querySelector(`.box`),
wrapper=document.querySelector(`.wrapper`);
let intervalId=setInterval(logger,2000);


 let i=0;
// btn.addEventListener(`click`,(e)=>{
//     //const timerId=setTimeout(logger,2000);
//     intervalId=setInterval(logger,2000);
// });




let timerId;

function logger() {
    if(i<3){
    console.log(`hello!`);
    i++;
    }else{
        clearInterval(intervalId);
    }
}

let j=0;

// btn.addEventListener(`click`,()=>{

//     timerId=setTimeout(logger1,2000);

// });



// function logger1() { 
//     j++;
//     console.log(j);
//     console.log(timerId);
//    if(j<3){
//     timerId=setTimeout(logger1,2000);
//    } 
// }

// let timerId1=setTimeout(function log() {
//     console.log(`oleg`);
//     timerId=setTimeout(log,500);
    
// },500);



let left=0;
let top1=0;

// function animation(box){
    
//     box.style.left=`${left+=10}px`;
//     box.style.top=`${top1+=10}px`;
//     console.log(left);
//     console.log(top1);
//     //if(boxi.style.left==wrapper.style.width-100)

// }



// btn.addEventListener(`click`,()=>{
//     if(box.style.left!=`300px`||box.style.top!=`300px`){
//     timerId=setTimeout(function animation(){
    
//         box.style.left=`${left+=1}px`;
//         box.style.top=`${top1+=1}px`;
//         console.log(left);
//         console.log(top1);
//         if(box.style.left==`300px`||box.style.top==`300px`){
//             clearInterval(timerId);
//         }else{
//             timerId=setTimeout(animation,10);
//         }
    
//     },10);
//     }
// });

btn.addEventListener(`click`,()=>{
    if(box.style.left!=`300px`||box.style.top!=`300px`){
    timerId=requestAnimationFrame(function animation(){
    
        box.style.left=`${left+=1}px`;
        box.style.top=`${top1+=1}px`;
        console.log(left);
        console.log(top1);
        if(box.style.left==`300px`||box.style.top==`300px`){
            cancelAnimationFrame(timerId);
            
        }else{
            timerId=setTimeout(animation);
        }
    
    });
    }
});





// btn.addEventListener(`click`,()=>{

//     timerId=setTimeout(logger1,2000);

// });


const now=new Date(2020-09-18);
console.log(now);