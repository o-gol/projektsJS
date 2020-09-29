const btn1=document.getElementById("btn"),
overlay=document.querySelector(`.overlay`),
btns=document.querySelectorAll(`button`);

// btn1.onclick=function(){
//     alert("Mouse clik!");
// };
let i=0;
 const delElement=(e)=>{
//     i++;
//     if(i==1){
//         btn1.removeEventListener(`click`,delElement);
//     }
    console.log(e.currentTarget);
    console.log(e.type);
    //e.target.remove();
};

btn1.addEventListener(`click`,delElement);
overlay.addEventListener(`click`,delElement);
btn1.addEventListener(`mouseenter`,()=>{
    console.log("Clik me!");
},{once:true});

const link = document.querySelector("a");
link.addEventListener(`click`,(e)=>{
    e.preventDefault();
    console.log(e.target);

});

btns.forEach((item)=>{
    item.addEventListener(`click`,delElement);
});