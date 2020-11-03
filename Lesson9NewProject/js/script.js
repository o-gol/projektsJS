

`use strict`;


import timer from './modules/timer';
import tabs from './modules/tabs';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calculator from './modules/calculator';
import {showModal} from './modules/modal';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";


// cd projectsJS/Lesson9NewProject 
// cd Lesson9NewProject 
// cd C:\MAMP\htdocs\projektsJS\Lesson9NewProject
// comands: npx json-server db.json  --запуск json сервера
//http://localhost:3000/menu  --база данных json сервера(get)
//http://localhost:3000/requests  --requests json сервера(post)
//npm install webpack webpack-cli --save-dev










document.addEventListener(`DOMContentLoaded`, () => {

const idTimer = setTimeout(()=>showModal(`.modal`,idTimer), 5000);
timer(`.timer`,"2020-11-29");
tabs(`.tabheader__item`,`.tabheader__items`,`.tabcontent`,`tabheader__item_active`);

slider (`.offer__slider`,               
`.offer__slide`,                     
`.offer__slider-next`,                             
`.offer__slider-prev`,                             
`#current`,                                           
`#total`,                                       
`.offer__slider-inner`,                               
`.offer__slider-wrapper`,                                     
`ol`                                               

//   {
// slider : `.offer__slider`,                  
// sliderWrappers : `.offer__slide`,                            
// sliderNext : `.offer__slider-next`,                                    
// sliderPrev : `.offer__slider-prev`,                                       
// current : `#current`,                                                       
// total : `#total`,                                             
// sliderField : `.offer__slider-inner`,                                   
// sliderWrapper : `.offer__slider-wrapper`,                                     
// carouselIndicators : `ol`                                               
//  }
);
// tns({
//     container: `.offer__slider`,
// mode :	"carousel", 
// axis  :	"horizontal" ,
// items	: 3,
// gutter :	10,
// edgePadding	: 10,
// center : true,
// sslideBy : `page`,
// prevButton:`.offer__slider-prev`	,

// nextButton	: `.offer__slider-next`,
// autoplay: true,

// // nav	Boolean	Default: true.
// // Controls the display and functionalities of nav components (dots). If true, display the nav and add all functionalities.
// // navPosition	"top" | "bottom"	Default: "top".
// // Controls nav position.
// // navContainer	Node | String | false	Default: false.
// // The container element/selector around the dots.
// // navContainer must have at least same number of children as the slides.
// // navAsThumbnails	Boolean	Default: false.
// // Indicate if the dots are thumbnails. If true, they will always be visible even when more than 1 slides displayed in the viewport.
// //   
// });
modal(`[data-model]`,`.modal`,idTimer);
forms(`.modal`,idTimer);
cards();
calculator();


function end(){

 //-------------------------MyColculator

// let weight=60,
// height=170,
// age=30,
// coefficient=0,
// sexCoef=0;
// const sex=document.querySelector(`#gender`),
// calculating=document.querySelector(`.calculating`),
// coloriesSpan=calculating.querySelector(`span`),
// sexItems=sex.querySelectorAll(`.calculating__choose-item`),
// activCont=document.querySelector(`.calculating__choose_big`),
// activContItems=activCont.querySelectorAll(`.calculating__choose-item`);
// const inputsCont=document.querySelector(`.calculating__choose_medium`);
// const inputsContItems=inputsCont.querySelectorAll(`.calculating__choose-item`);
// chooseItemsActive();
// inputs(inputsContItems);
// choose(sex, sexItems);
// choose(activCont,activContItems);




// function chooseItemsActive(){
//     const items= document.querySelectorAll(`.calculating__choose-item.calculating__choose-item_active` );
//     items.forEach((item)=>{
//         switch(item.textContent){
//             case "Мужчина" :
//                 sexCoef=5;
//                 break;
//             case "Женщина" :
//                 sexCoef=(-161);
//                 break;
//             case "Низкая активность " :
//                 coefficient=1.2;
//                 break;
//             case "Невысокая активность" :
//                 coefficient=1.375;
//                 break;
//             case "Умеренная активность" :
//                 coefficient=1.55;
//                 break;
//             case "Высокая активность" :
//                 coefficient=1.7;
//                 break;
//         }
//     });

    
//     // inputsCont.addEventListener
//     coloriesSpan.innerText=calories();
// }
// function inputs(items){

//         // items.forEach(item=>{
//         //     item.addEventListener(`mouseout`,()=>{
//         //         if(item.id==`height`){    
//         //             item.value=`${height} см`;        
//         //         }else if(item.id==`weight`){
//         //             item.value=`${weight} кг`;
//         //         }else if(item.id==`age`){
//         //             item.value=`${age} лет`;
//         //         }
//         //     });
//         // });
//         // items.forEach(item=>{
//         //     item.addEventListener(`mouseover`,()=>{
//         //         if(item.id==`height`){    
//         //             item.value=height;        
//         //         }else if(item.id==`weight`){
//         //             item.value=weight;
//         //         }else if(item.id==`age`){
//         //             item.value=age;
//         //         }
//         //     });
//         // });
//         // items.forEach(item=>{
//         //     item.addEventListener(`input`,()=>{
//         //         if(item.id==`height`){
//         //             numsOnlyH(item.value,height);
//         //             item.value=height;
//         //             //height= +item.value;
//         //             coloriesSpan.innerText=calories();
//         //         }else if(item.id==`weight`){
//         //             numsOnlyW(item.value,weight);
//         //             item.value=weight;
//         //             //weight= +item.value;
//         //             coloriesSpan.innerText=calories();
//         //         }else if(item.id==`age`){
//         //             numsOnlyA(item.value,age);
//         //             item.value=age;
//         //             //age= +item.value;
//         //             coloriesSpan.innerText=calories();
//         //         }
//         //     });
//         // });

//         items.forEach(item=>{
//             if(item.id==`height`){    
//                 item.value=`${height} см`;        
//             }else if(item.id==`weight`){
//                 item.value=`${weight} кг`;
//             }else if(item.id==`age`){
//                 item.value=`${age} лет`;
//             }

//         });


//         // items.forEach(item=>{
//         //     item.addEventListener(`click`,(e)=>{
//         //         //if()
//         //         console.log(item.value.match(/\D/ig,""));
//         //         console.log(e);
//         //         item.value=item.value.replace(/\D/ig,"");
                
//         //     })

//         // });
    
//     //     items.forEach(item=>{
//     //         item.addEventListener(`input`,()=>{ //`change`
//     //         if(item.id==`height`){
//     //             numsOnlyH(item.value,height);
//     //             item.value=`${height} см`;
//     //             //height= +item.value;
//     //             coloriesSpan.innerText=calories();
//     //         }else if(item.id==`weight`){
//     //             numsOnlyW(item.value,weight);
//     //             item.value=`${weight} кг`;
//     //             //weight= +item.value;
//     //             coloriesSpan.innerText=calories();
//     //         }else if(item.id==`age`){
//     //             numsOnlyA(item.value,age);
//     //             item.value=`${age} лет`;
//     //             //age= +item.value;
//     //             coloriesSpan.innerText=calories();
//     //         }
            
//     //     });
//     // });

//     items.forEach(item=>enterItemLissener(item));


//     //     items.forEach(item=>{
//     //         item.addEventListener(`change`,()=>{ //`change`
//     //         if(item.id==`height`){
//     //             if(50<+item.value<272){
//     //                 height=+item.value;
//     //             }else{
//     //                 alert('введите реальный рост в сантиметрах')
//     //             }

            
                
//     //         }else if(item.id==`weight`){
//     //             if(15<+item.value<500){
//     //                 weight=+item.value;
//     //             }else{
//     //                 alert('введите реальный вес в килограммах')
//     //             }
                
//     //         }else if(item.id==`age`){
//     //             item.value.replace(/0/i,"");
//     //     if(5<+item.value<110){
//     //         age=+item.value;
//     //     }else{
//     //         alert('введите реальный возраст в годах')
//     //     }
//     //         }
            
//     //     });

//     // });


//     coloriesSpan.innerText=calories();
// }
// function choose(container,items){

//     container.addEventListener(`click`,(e)=>{
        
//         items.forEach(item=>{
            
//             if(e.target&&item==e.target){
                
//                 item.classList.add(`calculating__choose-item_active`);
//             }else if(item.classList.contains(`calculating__choose-item_active`)&&e.target.classList.contains(`calculating__choose-item`)){
                
//                 item.classList.remove(`calculating__choose-item_active`)
//             }
            
//         });
//         chooseItemsActive();
//     });

// }
// function calories() {

//     return Math.floor((10*weight+6.25*height-5*age+sexCoef)*coefficient)
    
// } 
// function  numsOnlyH (string,variable){

//     if (/\D/im.test(string)){
//         alert("введите только цифры");
//         variable.blur();
//     }else{
//         if(50<+string<272){
//             height=+string;
//         }else{
//             alert('введите реальный рост в сантиметрах')
//         }
        
//     }

// }
// function  numsOnlyW (string,variable){

//     if (/\D/im.test(string)){
//         alert("введите только цифры");
//         variable.blur();
//     }else{
//         if(15<+string<500){
//             weight=+string;
//         }else{
//             alert('введите реальный вес в килограммах')
//         }
        
//     }

// }
// function  numsOnlyA (string,variable){

//     if (/\D/im.test(string)){
//         alert("введите только цифры");
//         variable.blur();
//     }else{
//         string.replace(/0/i,"");
//         if(5<+string<110){
//             age=+string;
//         }else{
//             alert('введите реальный возраст в годах')
//         }
        
//     }

// }
// function enterItemLissener(item) {
//     let evt = false;
//     document.addEventListener(`keydown`, (evk) => {
//         if (evt && evk.code == `Enter`) {
//             evk.preventDefault();
//             if(item.id==`height`){
//                 numsOnlyH(item.value,item);
//                 item.value=height;
//                 //height= +item.value;
//                 coloriesSpan.innerText=calories();
//             }else if(item.id==`weight`){
//                 numsOnlyW(item.value,item);
//                 item.value=weight;
//                 //weight= +item.value;
//                 coloriesSpan.innerText=calories();
//             }else if(item.id==`age`){
//                 numsOnlyA(item.value,item);
//                 item.value=age;
//                 //age= +item.value;
//                 coloriesSpan.innerText=calories();
//             }
//         }

//         coloriesSpan.innerText=calories();


        
//     });


//     function test() {
//         evt = true;
        
//         if(item.id==`height`){    
//             item.value=height;        
//         }else if(item.id==`weight`){
//             item.value=weight;
//         }else if(item.id==`age`){
//             item.value=age;
//         }
//         coloriesSpan.innerText=calories();
//         item.removeEventListener(`mouseover`, test);
//     }

//     item.addEventListener(`mouseover`, test);

//     item.addEventListener(`mouseout`, () => {
//         evt = false;
        
//         if(item.id==`height`){
//             numsOnlyH(item.value,item);
//             item.value=`${height} см`;
//             //height= +item.value;
//             coloriesSpan.innerText=calories();
//         }else if(item.id==`weight`){
//             numsOnlyW(item.value,item);
//             item.value=`${weight} кг`;
//             //weight= +item.value;
//             coloriesSpan.innerText=calories();
//         }else if(item.id==`age`){
//             numsOnlyA(item.value,item);
//             item.value=`${age} лет`;
//             //age= +item.value;
//             coloriesSpan.innerText=calories();
//         }
//         item.addEventListener(`mouseover`, test);
//     });

//     coloriesSpan.innerText=calories();

// }

//  //-------------------------End MyColculator


 















    // let totalNums=sliderWrappers.length;
    // total.innerHTML=returnZero(totalNums);
    // function showHideElementsByNum(element,num){
    //     element.forEach((item,i)=>{
    //         if(i==num){
    //             item.classList.add(`show`);
    //             item.classList.remove(`hide`);
    //             current.innerHTML=returnZero(num+1);


    //         }else{
    //             item.classList.add(`hide`);
    //             item.classList.remove(`show`);

    //         }
    //     });

    // }

    // showHideElementsByNum(sliderWrappers, numOfSlider);





    // sliderNext.addEventListener(`click`, ()=>{
    //     if(numOfSlider<totalNums-1){
    //         numOfSlider++;
    //       showHideElementsByNum(sliderWrappers, numOfSlider);  
    //     }else{
    //         numOfSlider=0;
    //         showHideElementsByNum(sliderWrappers, numOfSlider); 
    //     }



    // });
    // sliderPrev.addEventListener(`click`, ()=>{
    //     if(numOfSlider<=0){
    //         numOfSlider=totalNums-1;
    //         showHideElementsByNum(sliderWrappers, numOfSlider);

    //     }else{
    //         numOfSlider--;
    //       showHideElementsByNum(sliderWrappers, numOfSlider);  
    //     }



    // });


    //------------------------- End Slider










    //------------------- Garbage




    // fetch(`http://localhost:3000/menu`)
    //     .then((response) => response.json())
    //     //.then((data)=>JSON.parse(data))
    //     .then((data) => console.log(data));
    // getConnect(`http://localhost:3000/menu`)
    //     //.then((data)=>JSON.parse(data))
    //     .then((data) => console.log(data));


    // getConnect(`http://localhost:3000/menu`)
    //     .then((data)=>{

    //         data
    //             .forEach(item=>{
    //                         new MenuItem(item.imgSrc,
    //                             item.alt,
    //                             item.subtitle,
    //                             item.descr,
    //                             item.totalPrice,
    //                             `.menu__field .container`).innerMenuItem();
    //                         console.log(`do item`);

    //                     });
    //     });

    //alert(diffDays);

    // console.log(timeDiff);
    // console.log(timeDiff1);

    //------------Event forEach
    // tabheaderItems.forEach(item=>{
    //     item.classList.remove(`tabheader__item_active`);
    //     item.addEventListener(`mouseover`,(e)=>{
    //         item.classList.toggle(`tabheader__item_active`); 
    //     });

    // });
    // tabheaderItems.forEach(item=>{
    //     item.classList.remove(`tabheader__item_active`);
    //     item.addEventListener(`mouseout`,(e)=>{
    //         item.classList.toggle(`tabheader__item_active`); 
    //     });
    // });


    //-----------Event Delegation
    // tabheaderItem.addEventListener(`mouseover`, (e) => {
    //     //e.target.classList.remove(`tabheader__item_active`);
    //     if (e.target && e.target.classList[0]==`tabheader__item`) {
    //         //e.target.classList.remove(`tabheader__item_active`);
    //         e.target.classList.toggle(`tabheader__item_active`); 
    //     }

    // });
    // tabheaderItem.addEventListener(`mouseout`, (e) => {
    //     //e.target.classList.remove(`tabheader__item_active`);
    //     if (e.target && e.target.classList[0]==`tabheader__item`) {
    //         e.target.classList.toggle(`tabheader__item_active`); 
    //     }

    // });

    //--------------Event ForEach

    // tabheaderItems.forEach((item,i)=>{
    //     item.addEventListener(`click`,e=>{
    //         hideTabContent();
    //         showTabContent(i);
    //     });
    // });
}

});