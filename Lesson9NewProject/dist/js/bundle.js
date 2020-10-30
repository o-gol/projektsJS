/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function calculator(){

    //-------------------------Colculator

let weight=60,
height=170,
age=30,
coefficient=0,
sexCoef=0;
const sex=document.querySelector(`#gender`),
calculating=document.querySelector(`.calculating`),
coloriesSpan=calculating.querySelector(`span`),
sexItems=sex.querySelectorAll(`.calculating__choose-item`),
activCont=document.querySelector(`.calculating__choose_big`),
activContItems=activCont.querySelectorAll(`.calculating__choose-item`);
const inputsCont=document.querySelector(`.calculating__choose_medium`);
const inputsContItems=inputsCont.querySelectorAll(`.calculating__choose-item`);
chooseItemsActive();
inputs(inputsContItems);
choose(sex, sexItems);
choose(activCont,activContItems);




function chooseItemsActive(){
    const items= document.querySelectorAll(`.calculating__choose-item.calculating__choose-item_active` );
    items.forEach((item)=>{
        switch(item.textContent){
            case "Мужчина" :
                sexCoef=5;
                break;
            case "Женщина" :
                sexCoef=(-161);
                break;
            case "Низкая активность " :
                coefficient=1.2;
                break;
            case "Невысокая активность" :
                coefficient=1.375;
                break;
            case "Умеренная активность" :
                coefficient=1.55;
                break;
            case "Высокая активность" :
                coefficient=1.7;
                break;
        }
    });

    
    // inputsCont.addEventListener
    coloriesSpan.innerText=calories();
}
function inputs(items){

        // items.forEach(item=>{
        //     item.addEventListener(`mouseout`,()=>{
        //         if(item.id==`height`){    
        //             item.value=`${height} см`;        
        //         }else if(item.id==`weight`){
        //             item.value=`${weight} кг`;
        //         }else if(item.id==`age`){
        //             item.value=`${age} лет`;
        //         }
        //     });
        // });
        // items.forEach(item=>{
        //     item.addEventListener(`mouseover`,()=>{
        //         if(item.id==`height`){    
        //             item.value=height;        
        //         }else if(item.id==`weight`){
        //             item.value=weight;
        //         }else if(item.id==`age`){
        //             item.value=age;
        //         }
        //     });
        // });
        // items.forEach(item=>{
        //     item.addEventListener(`input`,()=>{
        //         if(item.id==`height`){
        //             numsOnlyH(item.value,height);
        //             item.value=height;
        //             //height= +item.value;
        //             coloriesSpan.innerText=calories();
        //         }else if(item.id==`weight`){
        //             numsOnlyW(item.value,weight);
        //             item.value=weight;
        //             //weight= +item.value;
        //             coloriesSpan.innerText=calories();
        //         }else if(item.id==`age`){
        //             numsOnlyA(item.value,age);
        //             item.value=age;
        //             //age= +item.value;
        //             coloriesSpan.innerText=calories();
        //         }
        //     });
        // });

        items.forEach(item=>{
            if(item.id==`height`){    
                item.value=`${height} см`;        
            }else if(item.id==`weight`){
                item.value=`${weight} кг`;
            }else if(item.id==`age`){
                item.value=`${age} лет`;
            }

        });


        // items.forEach(item=>{
        //     item.addEventListener(`click`,(e)=>{
        //         //if()
        //         console.log(item.value.match(/\D/ig,""));
        //         console.log(e);
        //         item.value=item.value.replace(/\D/ig,"");
                
        //     })

        // });
    
    //     items.forEach(item=>{
    //         item.addEventListener(`input`,()=>{ //`change`
    //         if(item.id==`height`){
    //             numsOnlyH(item.value,height);
    //             item.value=`${height} см`;
    //             //height= +item.value;
    //             coloriesSpan.innerText=calories();
    //         }else if(item.id==`weight`){
    //             numsOnlyW(item.value,weight);
    //             item.value=`${weight} кг`;
    //             //weight= +item.value;
    //             coloriesSpan.innerText=calories();
    //         }else if(item.id==`age`){
    //             numsOnlyA(item.value,age);
    //             item.value=`${age} лет`;
    //             //age= +item.value;
    //             coloriesSpan.innerText=calories();
    //         }
            
    //     });
    // });

    items.forEach(item=>enterItemLissener(item));


    //     items.forEach(item=>{
    //         item.addEventListener(`change`,()=>{ //`change`
    //         if(item.id==`height`){
    //             if(50<+item.value<272){
    //                 height=+item.value;
    //             }else{
    //                 alert('введите реальный рост в сантиметрах')
    //             }

            
                
    //         }else if(item.id==`weight`){
    //             if(15<+item.value<500){
    //                 weight=+item.value;
    //             }else{
    //                 alert('введите реальный вес в килограммах')
    //             }
                
    //         }else if(item.id==`age`){
    //             item.value.replace(/0/i,"");
    //     if(5<+item.value<110){
    //         age=+item.value;
    //     }else{
    //         alert('введите реальный возраст в годах')
    //     }
    //         }
            
    //     });

    // });


    coloriesSpan.innerText=calories();
}
function choose(container,items){

    container.addEventListener(`click`,(e)=>{
        
        items.forEach(item=>{
            
            if(e.target&&item==e.target){
                
                item.classList.add(`calculating__choose-item_active`);
            }else if(item.classList.contains(`calculating__choose-item_active`)&&e.target.classList.contains(`calculating__choose-item`)){
                
                item.classList.remove(`calculating__choose-item_active`)
            }
            
        });
        chooseItemsActive();
    });

}
function calories() {

    return Math.floor((10*weight+6.25*height-5*age+sexCoef)*coefficient)
    
} 

function enterItemLissener(item) {
    let evt = false;
    item.addEventListener(`input`, () => {
        // console.log(item.value);
        // console.log(evt);
        //if (evt && evk.code == `Enter`) {
            // console.log(item.value);
            // console.log(evt);
            //evk.preventDefault();
            if(/\D/im.test(item.value)){
                alert("введите только цифры");
                item.blur();
                if(item.id==`height`){
                item.value=height;
                }
                else if(item.id==`weight`){
                item.value=weight;
                }
                else if(item.id==`age`){
                item.value=age;
                }
            }else{
            if(item.id==`height`){
                //numsOnlyH(item.value,item);
                height= +item.value;
                item.value=height;
                
                coloriesSpan.innerText=calories();
            }else if(item.id==`weight`){
                //numsOnlyW(item.value,item);
                weight= +item.value;
                item.value=weight;
                
                coloriesSpan.innerText=calories();
            }else if(item.id==`age`){
                //numsOnlyA(item.value,item);
                age= +item.value;
                item.value=age;
                
                coloriesSpan.innerText=calories();
            }
        }
        //}

        coloriesSpan.innerText=calories();


        
    });


    function test() {
        evt = true;
        
        if(item.id==`height`){    
            item.value=height;        
        }else if(item.id==`weight`){
            item.value=weight;
        }else if(item.id==`age`){
            item.value=age;
        }
        coloriesSpan.innerText=calories();
        item.removeEventListener(`mouseover`, test);
    }

    item.addEventListener(`mouseover`, test);

    item.addEventListener(`mouseout`, () => {
        evt = false;
        if(/\D/im.test(item.value)){
            alert("введите только цифры");
            item.blur();
        }else{
        if(item.id==`height`){
            //numsOnlyH(item.value,item);
            height= +item.value;
            item.value=`${height} см`;
            
            coloriesSpan.innerText=calories();
        }else if(item.id==`weight`){
            //numsOnlyW(item.value,item);
            weight= +item.value;
            item.value=`${weight} кг`;
            
            coloriesSpan.innerText=calories();
        }else if(item.id==`age`){
            //numsOnlyA(item.value,item);
            age= +item.value;
            item.value=`${age} лет`;
            
            coloriesSpan.innerText=calories();
        }
    }
        item.addEventListener(`mouseover`, test);
    });

    coloriesSpan.innerText=calories();

}
// function enterItemLissener(item) {
//     let evt = false;
//     document.addEventListener(`keydown`, (evk) => {
//         // console.log(item.value);
//         // console.log(evt);
//         if (evt && evk.code == `Enter`) {
//             // console.log(item.value);
//             // console.log(evt);
//             evk.preventDefault();
//             if(/\D/im.test(item.value)){
//                 alert("введите только цифры");
//                 variable.blur();
//             }else{
//             if(item.id==`height`){
//                 //numsOnlyH(item.value,item);
//                 height= +item.value;
//                 item.value=height;
                
//                 coloriesSpan.innerText=calories();
//             }else if(item.id==`weight`){
//                 //numsOnlyW(item.value,item);
//                 weight= +item.value;
//                 item.value=weight;
                
//                 coloriesSpan.innerText=calories();
//             }else if(item.id==`age`){
//                 //numsOnlyA(item.value,item);
//                 age= +item.value;
//                 item.value=age;
                
//                 coloriesSpan.innerText=calories();
//             }
//         }
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
//         if(/\D/im.test(item.value)){
//             alert("введите только цифры");
//             variable.blur();
//         }else{
//         if(item.id==`height`){
//             //numsOnlyH(item.value,item);
//             height= +item.value;
//             item.value=`${height} см`;
            
//             coloriesSpan.innerText=calories();
//         }else if(item.id==`weight`){
//             //numsOnlyW(item.value,item);
//             weight= +item.value;
//             item.value=`${weight} кг`;
            
//             coloriesSpan.innerText=calories();
//         }else if(item.id==`age`){
//             //numsOnlyA(item.value,item);
//             age= +item.value;
//             item.value=`${age} лет`;
            
//             coloriesSpan.innerText=calories();
//         }
//     }
//         item.addEventListener(`mouseover`, test);
//     });

//     coloriesSpan.innerText=calories();

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


 //-------------------------End Colculator



}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function cards(){

      //------------------------- создание Menu Items

      class MenuItem {
        constructor(imgSrc, alt, subtitle, descr, totalPrice, parent, ...classes) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.totalPrice = totalPrice;
            this.classes = classes;
            this.transfer = 27;
            this.chengeToUAH();
            this.contaner = document.querySelector(parent);

        }

        chengeToUAH() {
            this.totalPrice = this.totalPrice * this.transfer;

        }

        innerMenuItem() {
            const menuItem = `
                    <img src="${this.imgSrc}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.totalPrice}</span> грн/день</div>
                    </div>
            `;

            let divMenuItem = document.createElement(`div`);


            if (this.classes.length === 0) {
                this.defaultClass = `menu__item`;
                divMenuItem.classList.add(this.defaultClass);
            } else {
                this.classes.forEach(className => divMenuItem.classList.add(className));
            }


            divMenuItem.innerHTML = menuItem;

            this.contaner.append(divMenuItem);
            //contaner.innerHTML=divMenuItem;




        }



    }

    async function menuItemInit() {
        // getConnect(`http://localhost:3000/menu`)
        // .then((data)=>{

        //     data
        //         .forEach(item=>{
        //                     new MenuItem(item.imgSrc,
        //                         item.alt,
        //                         item.subtitle,
        //                         item.descr,
        //                         item.totalPrice,
        //                         `.menu__field .container`).innerMenuItem();


        //                 });
        // });
        axios.get(`http://localhost:3000/menu`)
            .then((data) => {

                data.data
                    .forEach(item => {
                        new MenuItem(item.imgSrc,
                            item.alt,
                            item.subtitle,
                            item.descr,
                            item.totalPrice,
                            `.menu__field .container`).innerMenuItem();


                    });
            });
    }

    menuItemInit();











    const menuItemsComments = {
        // // <div class="menu__item">
        // //                 <img src="img/tabs/vegy.jpg" alt="vegy">
        // //                 <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
        // //                 <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
        // //                 <div class="menu__item-divider"></div>
        // //                 <div class="menu__item-price">
        // //                     <div class="menu__item-cost">Цена:</div>
        // //                     <div class="menu__item-total"><span>229</span> грн/день</div>
        // //                 </div>
        // //  </div>

        // class MenuItem {
        //     constructor(imgSrc, alt, subtitle, descr, totalPrice, parent, ...classes) {
        //         this.imgSrc = imgSrc;
        //         this.alt = alt;
        //         this.subtitle = subtitle;
        //         this.descr = descr;
        //         this.totalPrice = totalPrice;
        //         this.classes = classes;
        //         this.transfer = 27;
        //         this.chengeToUAH();
        //         this.contaner = document.querySelector(parent);

        //     }

        //     chengeToUAH() {
        //         this.totalPrice = this.totalPrice * this.transfer;

        //     }

        //     innerMenuItem() {
        //         const menuItem = `
        //                 <img src="${this.imgSrc}" alt="${this.alt}">
        //                 <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
        //                 <div class="menu__item-descr">${this.descr}</div>
        //                 <div class="menu__item-divider"></div>
        //                 <div class="menu__item-price">
        //                     <div class="menu__item-cost">Цена:</div>
        //                     <div class="menu__item-total"><span>${this.totalPrice}</span> грн/день</div>
        //                 </div>
        //         `;

        //         let divMenuItem = document.createElement(`div`);


        //         if (this.classes.length === 0) {
        //             this.defaultClass = `menu__item`;
        //             divMenuItem.classList.add(this.defaultClass);
        //         } else {
        //             this.classes.forEach(className => divMenuItem.classList.add(className));
        //         }


        //         divMenuItem.innerHTML = menuItem;

        //         this.contaner.append(divMenuItem);
        //         //contaner.innerHTML=divMenuItem;




        //     }



        // }


        // new MenuItem(`img/tabs/vegy.jpg`,
        //     `vegy`,
        //     `Фитнес`,
        //     `Меню "Фитнес" - это новый подход к приготовлению блюд: 
        //                                     больше свежих овощей и фруктов.
        //                                      Продукт активных и здоровых людей. Это абсолютно новый 
        //                                      продукт с оптимальной ценой и высоким качеством!`,
        //     11,
        //     `.menu__field .container`

        // ).innerMenuItem();
        // new MenuItem(`img/tabs/elite.jpg`,
        //     `elite`,
        //     `Премиум`,
        //     `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
        //     15,
        //     `.menu__field .container`,
        //     `menu__item`
        // ).innerMenuItem();
        // new MenuItem(`img/tabs/post.jpg`,
        //     `post`,
        //     `Постное`,
        //     `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
        //     10,
        //     `.menu__field .container`,
        //     `menu__item`
        // ).innerMenuItem();

        // //fitnesItemMenu.innerMenuItem();
    };

    //------------------------- конец Menu Items



}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);



/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(modalSelector,idTimer)

{

     //------------------------- Forms
     const allForms = document.querySelectorAll(`form`);
     //const callMeBackButton=document.querySelectorAll(`[call-button]`);
     //console.log(callMeBackButton);
     //console.log(orderForm);
     //modelCaller;
     //callMe;
     //modal__input
     //order__input
     //[phone-input]
     //[name-input]
     //console.log(allForms);
     const modelCaller = document.querySelector(modalSelector);
     allForms.forEach(item => {
         callMeBack(item);
     });
 
     // });
     const message = {
         loading: `img/form/spinner.svg`,
         success: `Спасибо мы с вами свяжемся!`,
         failure: `Что-то пошло не так!`
 
     };
 
 
     const coments = {
         //  function callMeBack(form){
 
         //      form.addEventListener(`submit`,e=>{
 
         //         e.preventDefault();
         //         const statusMessage=document.createElement(`div`);
         //         statusMessage.classList.add(`status`);
         //         statusMessage.textContent=message.loading;
         //         form.append(statusMessage);
         //         const request= new XMLHttpRequest();
         //         request.open(`POST`,`server.php`);    
         //         //request.setRequestHeader(`Content-type`,`multipart/form-data`);
         //         const formData=new FormData(form);
         //         //console.dir(formData);
         //         request.send(formData);
         //         request.addEventListener(`load`, ()=>{
         //             if(request.status===200){
         //                 console.log(`Ok`);
         //                 console.log(request.response);
         //                 statusMessage.textContent=message.success;
         //                 form.reset();
         //                 setTimeout(()=>{
         //                     statusMessage.remove();
         //                 }, 2000);
         //             }else{
         //                  console.log(`Eror`);
         //                  statusMessage.textContent=message.failure;
         //              }
         //         });    
 
 
         //      });
 
 
         //  }
 
         //  function callMeBack(form){
         //      form.addEventListener(`submit`,e=>{
         //         e.preventDefault();
         //         const statusMessage=document.createElement(`img`);
         //         statusMessage.src=message.loading;
         //         // statusMessage.style.cssText=`
         //         //     display: block;
         //         //     margin: 0 auto;
         //         //     width: 30px;
         //         //     height: 30px;
         //         // `;
         //         statusMessage.classList.add(`rot`);
         //         console.log(statusMessage);
         //         //form.append(statusMessage);
         //         form.insertAdjacentElement(`afterend`, statusMessage);
         //         const phone=form.querySelector(`[phone-input]`);
         //         const name=form.querySelector(`[name-input]`);
         //             //  console.log(phone);
         //             //  console.log(name);
         //             const info={
         //                 phone: phone.value,
         //                 name: name.value
 
         //             };
         //             const infoJSON=JSON.stringify(info);
         //             console.log(infoJSON);
         //             const request= new XMLHttpRequest();
         //             request.open(`POST`,`server.php`);
         //             request.setRequestHeader(`Content-type`,`aplication/json`);
         //             request.send(infoJSON);
         //             request.addEventListener(`load`, ()=>{
         //                 if(request.status===200){
         //                     console.log(`Ok`);
         //                     console.log(request.response);
         //                     showThanksModal(message.success);
         //                     statusMessage.remove();
         //                     // statusMessage.textContent=message.success;
         //                     form.reset();
 
         //                     // setTimeout(()=>{
         //                     //     statusMessage.remove();
         //                     // }, 2000);
         //                 }else{
         //                     console.log(`Eror`);
         //                     //statusMessage.textContent=message.failure;
         //                     showThanksModal(message.failure);
         //                 }
         //             }); 
 
 
         //      });
         //     }
     };
 
 
     // const   postConnect =  (url, headers1, body1)=> {
 
     //     const res= fetch(url, {
     //         method: `POST`,
     //         headers: headers1,
     //         body: body1
 
     //     });
 
     //     return  res.json();
     // };
     // async function   postConnect  (url, headers1, body1) {
 
     //     const res= await fetch(url, {
     //         method: `POST`,
     //         headers: headers1,
     //         body: body1
 
     //     });
 
     //     return await res.json();
     // }
 
     
 
 
 
 
 
 
     function callMeBack(form) {
         form.addEventListener(`submit`, e => {
             e.preventDefault();
             const statusMessage = document.createElement(`img`);
             statusMessage.src = message.loading;
             statusMessage.classList.add(`rot`);
             form.insertAdjacentElement(`afterend`, statusMessage);
             const phone = form.querySelector(`[phone-input]`);
             const name = form.querySelector(`[name-input]`);
             const info = {
                 phone: phone.value,
                 name: name.value
 
             };
 
 
             const infoFormData = new FormData(form);
             console.log(Object.fromEntries(infoFormData.entries()));
             const jsonInfoFormData = JSON
                 .stringify(Object.fromEntries(infoFormData.entries()));
 
 
 
 
 
 
             (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postConnect)(`http://localhost:3000/requests`, {
                     "Content-Type": "application/json; charset=UTF-8"
                 }, JSON.stringify(info))
                 //.then(data => data.text())
                 .then(data => {
                     console.log(`Ok`);
                     console.log(data);
                     showThanksModal(message.success);
                     statusMessage.remove();
                 }).catch((e) => {
                     console.log('Error: ' + e.message);
                     //console.log(`Eror`);
                     showThanksModal(message.failure);
                     statusMessage.remove();
                 }).finally(() => {
                     form.reset();
                 });
         });
     }
 
 
 
 
 
 
 
 
     function showThanksModal(messageAnsver) {
         const prevModalDialog = document.querySelector(`.modal__dialog`);
         prevModalDialog.classList.add(`hide`);
         (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)(`.modal`,idTimer);
         const thanksModal = document.createElement(`div`);
         thanksModal.classList.add(`modal__dialog`);
         thanksModal.innerHTML = `
     <div class="modal__content">
         <div data-close class="modal__close">×</div>
         <div class="modal__title">${messageAnsver}</div>
     </div>
 
     `;
 
         modelCaller.append(thanksModal);
         setTimeout(() => {
 
             thanksModal.remove();
             prevModalDialog.classList.add(`show`);
             prevModalDialog.classList.remove(`hide`);
             (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModel)(`.modal`);
 
         }, 5000);
 
 
 
     }
 
 
     //------------------------- End Forms




}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! namespace exports */
/*! export closeModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "closeModel": () => /* binding */ closeModel,
/* harmony export */   "showModal": () => /* binding */ showModal
/* harmony export */ });


function closeModel(modalSelector) {
    const modelCaller = document.querySelector(modalSelector);
    modelCaller.classList.add(`hide`);
    modelCaller.classList.remove(`show`);
    document.body.style.overflow = ``;

}

function showModal(modalSelector,idTimer) {
    const modelCaller = document.querySelector(modalSelector);
    modelCaller.classList.add(`show`);
    modelCaller.classList.remove(`hide`);
    document.body.style.overflow = `hidden`;
    if(idTimer){
    clearInterval(idTimer);
    }
}


function modal(calMeSelector,modalSelector,idTimer){

    
//modalClose = document.querySelectorAll(`[data-close]`);
const callMe = document.querySelectorAll(calMeSelector),
    modelCaller = document.querySelector(modalSelector);


function showModalbyScrol() {
    
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1) {
        showModal(modalSelector,idTimer);
        window.removeEventListener(`scroll`, showModalbyScrol);

    }

}


callMe.forEach((item) => {
    item.addEventListener(`click`,
    ()=> showModal(modalSelector,idTimer));
});


// modalClose.forEach((item) => {
//     item.addEventListener(`click`, closeModel);
// });


modelCaller.addEventListener(`click`, (e) => {
    //console.log(e.target);
    //if(e.target&&e.target.classList[0]==`modal`){
    if (e.target === modelCaller || e.target.getAttribute(`data-close`) == ``) {
        closeModel(modalSelector);
    }
});

document.addEventListener(`keydown`, (e) => {
    if (e.code === `Escape` && modelCaller.classList.contains(`show`)) {
        console.log(modelCaller.classList[1]);
        closeModel(modalSelector);
    }
});
//--------------------------TimeOut and ScrolEnd ModalWindow

window.addEventListener(`scroll`,showModalbyScrol);
//------------------------- End ModalWindow

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./js/modules/timer.js");


function slider(
    //{
    sliderS,
    sliderWrappersS,
    sliderNextS,
    sliderPrevS,
    currentS,
    totalS,
    sliderFieldS,
    sliderWrapperS,
    carouselIndicatorsS
    //}
    )
    {
    console.log(sliderS);
     //------------------------- Slider

    //  `.offer__slider`,        
    //  `.offer__slide`,         
    //  `.offer__slider-next`,   
    //  `.offer__slider-prev`,   
    //  `#current`,              
    //  `#total`,                
    //  `.offer__slider-inner`,  
    //  `.offer__slider-wrapper`,
    //  `ol`                     
    //  const slider = document.querySelector(`.offer__slider`);
    //  slider.style.position=`relative`;
    //  const sliderWrappers = slider.querySelectorAll(`.offer__slide`);
    //  const sliderNext = slider.querySelector(`.offer__slider-next`);
    //  const sliderPrev = slider.querySelector(`.offer__slider-prev`);
    //  const current = slider.querySelector(`#current`);
    //  const total = slider.querySelector(`#total`);
    //  const sliderField = slider.querySelector(`.offer__slider-inner`);
    //  const sliderWrapper = document.querySelector(`.offer__slider-wrapper`);
    //  const carouselIndicators = document.createElement(`ol`);
     const slider = document.querySelector(sliderS);
     slider.style.position=`relative`;
     const sliderWrappers = slider.querySelectorAll(sliderWrappersS);
     const sliderNext = slider.querySelector(sliderNextS);
     const sliderPrev = slider.querySelector(sliderPrevS);
     const current = slider.querySelector(currentS);
     const total = slider.querySelector(totalS);
     const sliderField = slider.querySelector(sliderFieldS);
     const sliderWrapper = document.querySelector(sliderWrapperS);
     const carouselIndicators = document.createElement(carouselIndicatorsS);


     
     carouselIndicators.classList.add(`carousel-indicators`);
     slider.append(carouselIndicators);
     let totalNums = sliderWrappers.length;
     total.innerHTML = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.returnZero)(totalNums);
 
     for (let i = 0; i < totalNums; i++) {
         const dot = document.createElement(`li`);
         //dot.id = i;
         dot.setAttribute(`data-slide-to`,i+1);
         dot.classList.add(`dot`);
         carouselIndicators.append(dot);
     }
     const dots = document.querySelectorAll(`.dot`);
 
     sliderWrapper.style.overflow = `hidden`;
     const width = window.getComputedStyle(sliderWrapper).width;
     let offset = 0;
     let numOfSlider = 0;
 
     function initSlider(num) {
         numOfSlider = num;
         offset = +width.slice(0, width.length - 2) * (numOfSlider - 1);
         sliderField.style.transform = `translateX(-${offset}px)`;
         current.innerHTML = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.returnZero)(numOfSlider);
         dots.forEach((item, i) => {
             if (i == num - 1) {
                 item.classList.add(`inc`);
             } else {
                 item.classList.remove(`inc`)
             }
 
         });
 
 
     }
 
     initSlider(2);
 
     sliderField.style.width = 100 * sliderWrappers.length + `%`
     //console.log(100 * sliderWrappers.length+`%`);
     sliderField.style.display = `flex`;
     sliderField.style.transition = `0.5s all`;
 
 
     sliderWrappers.forEach((item) => {
 
         item.style.width = width;
 
     });
 
     sliderNext.addEventListener(`click`, () => {
 
         if (offset == +width.slice(0, width.length - 2) * (sliderWrappers.length - 1)) {
             offset = 0;
             numOfSlider = 1;
 
         } else {
             offset += +width.slice(0, width.length - 2);
             numOfSlider++;
         }
         // sliderField.style.transform=`translateX(-${offset}px)`;
         // current.innerHTML=returnZero(numOfSlider);
         initSlider(numOfSlider);
 
     });
     sliderPrev.addEventListener(`click`, () => {
 
         if (offset <= 0) //+width.slice(0,width.length-2)*(sliderWrappers.length-1))
         {
             offset = +width.slice(0, width.length - 2) * (sliderWrappers.length - 1);
             numOfSlider = totalNums;
         } else {
             offset -= +width.slice(0, width.length - 2);
             numOfSlider--;
         }
         // sliderField.style.transform=`translateX(-${offset}px)`;
         // current.innerHTML=returnZero(numOfSlider);
         initSlider(numOfSlider);
 
     });
 
     carouselIndicators.addEventListener(`click`, (e) => {
         //console.dir(e.target);
         //if(e.target.classList.contains(`dot`))
         if (e.target && e.target.classList.contains(`dot`)) {
             //console.log(e.target.id);
             //initSlider(+e.target.id + 1);
             initSlider(e.target.getAttribute(`data-slide-to`));
         }
 
     });
 
     function rightLeftKeyboardSlider() {
         let evt = false;
         document.addEventListener(`keydown`, (evk) => {
 
             if (evt && evk.code == `ArrowRight`) {
                 evk.preventDefault();
                 if (offset == +width.slice(0, width.length - 2) * (sliderWrappers.length - 1)) {
                     offset = 0;
                     numOfSlider = 1;
 
                 } else {
                     offset += +width.slice(0, width.length - 2);
                     numOfSlider++;
                 }
                 initSlider(numOfSlider);
             }
 
 
             if (evt && evk.code == `ArrowLeft`) {
                 if (offset <= 0) //+width.slice(0,width.length-2)*(sliderWrappers.length-1))
                 {
                     offset = +width.slice(0, width.length - 2) * (sliderWrappers.length - 1);
                     numOfSlider = totalNums;
                 } else {
                     offset -= +width.slice(0, width.length - 2);
                     numOfSlider--;
                 }
                 // sliderField.style.transform=`translateX(-${offset}px)`;
                 // current.innerHTML=returnZero(numOfSlider);
                 initSlider(numOfSlider);
             }
         });
 
 
         function test() {
             evt = true;
             sliderWrapper.removeEventListener(`mouseover`, test);
         }
 
         sliderWrapper.addEventListener(`mouseover`, test);
 
         sliderWrapper.addEventListener(`mouseout`, () => {
             evt = false;
             sliderWrapper.addEventListener(`mouseover`, test);
         });
 
     }
 
 
     rightLeftKeyboardSlider();
 
 
 
  //-------------------------End Slider



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function tubs(tabheaderItemsSelector,tabheaderItemSelector,tabcontainersSelector,activity){

    const tabheaderItems = document.querySelectorAll(tabheaderItemsSelector),
        tabheaderItem = document.querySelector(tabheaderItemSelector),
        tabcontainers = document.querySelectorAll(tabcontainersSelector);
    //const tabcontainer = document.querySelector(`.tabcontainer`);



    let flag = 0;

    function hideTabContent() {
        tabcontainers.forEach(item => {
            item.style.display = `none`;

        });
        tabheaderItems.forEach(item => {
            item.classList.remove(activity);

        });

    }
    hideTabContent();

    function showTabContent(i = 0) {
        tabcontainers[i].style.display = `block`;
        tabheaderItems[i].classList.add(activity);
        flag = i;
    }
    showTabContent();

    tabheaderItem.addEventListener(`click`, e => {
        if (e.target && e.target.classList[0] == tabheaderItemsSelector.substr(1)) {
            tabheaderItems.forEach((item, i) => {
                if (item == e.target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }

    });


     //-----------Event Delegation
     tabheaderItem.addEventListener(`mouseover`, (e) => {
        

        if (e.target && e.target.classList.contains(tabheaderItemsSelector.substr(1)) && e.target == tabheaderItems[flag]) {} else if (e.target && e.target.classList.contains(tabheaderItemsSelector.substr(1))) {
            e.target.classList.toggle(activity);
        }
    });
    tabheaderItem.addEventListener(`mouseout`, (e) => {
        if (e.target && e.target.classList.contains(tabheaderItemsSelector.substr(1)) && e.target == tabheaderItems[flag]) {} else if (e.target && e.target.classList.contains(tabheaderItemsSelector.substr(1))) {
            e.target.classList.toggle(activity);
        }

    });



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tubs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export returnZero [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "returnZero": () => /* binding */ returnZero
/* harmony export */ });

function returnZero(num) {
    if ((num >= 0) && (num < 10)) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(timerSelector,date){


    
    
    const timer = document.querySelector(timerSelector),
        timerDay = timer.querySelector(`#days`),
        timerHours = timer.querySelector(`#hours`),
        timerMin = timer.querySelector(`#minutes`),
        timerSec = timer.querySelector(`#seconds`);



    
    let timerExemple;

    counterMy();
    timerExemple = setInterval(counterMy, 1000);

    

    


    function counterMy() {
        let date1 = new Date();
        //let date2 = new Date("29/10/2020");
        //let date2 = new Date(2020, 10, 29);
        let date2 = new Date(date);

        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        //let timeDiff1 = (date2.getTime() - date1.getTime());
        let diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let diffHours = Math.floor((timeDiff - diffDays * 86400000) / (1000 * 60 * 60));
        let diffMin = Math.floor((timeDiff - (diffDays * 86400000 + diffHours * 3600000)) / (1000 * 60));
        let diffSec = Math.floor((timeDiff - (diffDays * 86400000 + diffHours * 3600000 + diffMin * 60000)) / (1000));
        timerDay.innerText = returnZero(diffDays);
        timerHours.innerText = returnZero(diffHours);
        timerMin.innerText = returnZero(diffMin);
        timerSec.innerText = returnZero(diffSec);
        //console.log(`${diffDays} ${diffHours} ${diffMin} ${diffSec}`);
        if ((date2.getTime() - date1.getTime()) < 0) {
            clearInterval(timerExemple);
            counterInZero();
        }

        // console.log(diffHours);
        // console.log(diffMin);
        // console.log(diffSec);

    }

    function counterInZero() {
    timerDay.innerText = `00`;
    timerHours.innerText = `00`;
    timerMin.innerText = `00`;
    timerSec.innerText = `00`;
}



}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");


`use strict`;












// cd projectsJS/Lesson9NewProject 
// cd Lesson9NewProject 
// cd C:\MAMP\htdocs\projektsJS\Lesson9NewProject
// comands: npx json-server db.json  --запуск json сервера
//http://localhost:3000/menu  --база данных json сервера(get)
//http://localhost:3000/requests  --requests json сервера(post)
//npm install webpack webpack-cli --save-dev










document.addEventListener(`DOMContentLoaded`, () => {

const idTimer = setTimeout(()=>(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.showModal)(`.modal`,idTimer), 5000);
(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__.default)(`.timer`,"2020-11-29");
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__.default)(`.tabheader__item`,`.tabheader__items`,`.tabcontent`,`tabheader__item_active`);

(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default) (`.offer__slider`,               
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

(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)(`[data-model]`,`.modal`,idTimer);
(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)(`.modal`,idTimer);
(0,_modules_cards__WEBPACK_IMPORTED_MODULE_5__.default)();
(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)();

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

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! namespace exports */
/*! export getConnect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export postConnect [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postConnect": () => /* binding */ postConnect,
/* harmony export */   "getConnect": () => /* binding */ getConnect
/* harmony export */ });
async function postConnect(url, headers1, body1) {
    return await fetch(url, {
            method: `POST`,
            headers: headers1,
            body: body1

        })
        .then((response) => response.json());
}


async function getConnect(url) {
 
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status} `);
    }
    return res.json();
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map