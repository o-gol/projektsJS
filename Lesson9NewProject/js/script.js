`use strict`;
// cd projectsJS/Lesson9NewProject 
// cd C:\MAMP\htdocs\projektsJS\Lesson9NewProject
// comands: npx json-server db.json  --запуск json сервера
//http://localhost:3000/menu  --база данных json сервера(get)
//http://localhost:3000/requests  --requests json сервера(post)

document.addEventListener(`DOMContentLoaded`, () => {

    const tabheaderItems = document.querySelectorAll(`.tabheader__item`),
        tabheaderItem = document.querySelector(`.tabheader__items`),
        tabcontainers = document.querySelectorAll(`.tabcontent`);
    const tabcontainer = document.querySelector(`.tabcontainer`);
    const timerDay = document.querySelector(`#days`),
        timerHours = document.querySelector(`#hours`),
        timerMin = document.querySelector(`#minutes`),
        timerSec = document.querySelector(`#seconds`);



    let flag = 0;
    let timerExemple;

    counterMy();
    timerExemple = setInterval(counterMy, 1000);

    function hideTabContent() {
        tabcontainers.forEach(item => {
            item.style.display = `none`;

        });
        tabheaderItems.forEach(item => {
            item.classList.remove(`tabheader__item_active`);

        });

    }
    hideTabContent();

    function showTabContent(i = 0) {
        tabcontainers[i].style.display = `block`;
        tabheaderItems[i].classList.add(`tabheader__item_active`);
        flag = i;
    }
    showTabContent();

    function returnZero(num) {
        if ((num >= 0) && (num < 10)) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function counterInZero() {
        timerDay.innerText = `00`;
        timerHours.innerText = `00`;
        timerMin.innerText = `00`;
        timerSec.innerText = `00`;
    }

    function counterMy() {
        let date1 = new Date();
        //let date2 = new Date("09/25/2020");
        let date2 = new Date(2020, 9, 2);

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

    tabheaderItem.addEventListener(`click`, e => {
        if (e.target && e.target.classList[0] == `tabheader__item`) {
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
        if (e.target && e.target.classList.contains(`tabheader__item`) && e.target == tabheaderItems[flag]) {} else if (e.target && e.target.classList.contains(`tabheader__item`)) {
            e.target.classList.toggle(`tabheader__item_active`);
        }
    });
    tabheaderItem.addEventListener(`mouseout`, (e) => {
        if (e.target && e.target.classList.contains(`tabheader__item`) && e.target == tabheaderItems[flag]) {} else if (e.target && e.target.classList.contains(`tabheader__item`)) {
            e.target.classList.toggle(`tabheader__item_active`);
        }

    });

    //ModalWindow

    const callMe = document.querySelectorAll(`[data-model]`),
        modelCaller = document.querySelector(`.modal`);
    //modalClose = document.querySelectorAll(`[data-close]`);

    function closeModel() {
        modelCaller.classList.add(`hide`);
        modelCaller.classList.remove(`show`);
        document.body.style.overflow = ``;

    }

    function showModal() {
        modelCaller.classList.add(`show`);
        modelCaller.classList.remove(`hide`);
        document.body.style.overflow = `hidden`;
        clearInterval(idTimer);
    }


    function showModalbyScrol() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener(`scroll`, showModalbyScrol);

        }

    }


    callMe.forEach((item) => {
        item.addEventListener(`click`, showModal);
    });


    // modalClose.forEach((item) => {
    //     item.addEventListener(`click`, closeModel);
    // });


    modelCaller.addEventListener(`click`, (e) => {
        //console.log(e.target);
        //if(e.target&&e.target.classList[0]==`modal`){
        if (e.target === modelCaller || e.target.getAttribute(`data-close`) == ``) {
            closeModel();
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modelCaller.classList.contains(`show`)) {
            console.log(modelCaller.classList[1]);
            closeModel();
        }
    });
    //--------------------------TimeOut and ScrolEnd ModalWindow
    //const idTimer = setTimeout(showModal, 5000);
    //window.addEventListener(`scroll`,showModalbyScrol);
    //------------------------- End ModalWindow








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






            postConnect(`http://localhost:3000/requests`, {
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
        showModal();
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
            closeModel();

        }, 5000);



    }


    //------------------------- End Forms




    //------------------------- Slider

    const slider = document.querySelector(`.offer__slider`);
    slider.style.position=`relative`;
    //console.log(slider);
    const sliderWrappers = slider.querySelectorAll(`.offer__slide`);
    const sliderNext = slider.querySelector(`.offer__slider-next`);
    const sliderPrev = slider.querySelector(`.offer__slider-prev`);
    const current = slider.querySelector(`#current`);
    const total = slider.querySelector(`#total`);
    const sliderField = slider.querySelector(`.offer__slider-inner`);
    const sliderWrapper = document.querySelector(`.offer__slider-wrapper`);
    const carouselIndicators = document.createElement(`ol`);
    carouselIndicators.classList.add(`carousel-indicators`);
    slider.append(carouselIndicators);
    let totalNums = sliderWrappers.length;
    total.innerHTML = returnZero(totalNums);

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
        current.innerHTML = returnZero(numOfSlider);
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
function  numsOnlyH (string,variable){

    if (/\D/im.test(string)){
        alert("введите только цифры");
        variable.blur();
    }else{
        if(50<+string<272){
            height=+string;
        }else{
            alert('введите реальный рост в сантиметрах')
        }
        
    }

}
function  numsOnlyW (string,variable){

    if (/\D/im.test(string)){
        alert("введите только цифры");
        variable.blur();
    }else{
        if(15<+string<500){
            weight=+string;
        }else{
            alert('введите реальный вес в килограммах')
        }
        
    }

}
function  numsOnlyA (string,variable){

    if (/\D/im.test(string)){
        alert("введите только цифры");
        variable.blur();
    }else{
        string.replace(/0/i,"");
        if(5<+string<110){
            age=+string;
        }else{
            alert('введите реальный возраст в годах')
        }
        
    }

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


 //-------------------------End Colculator















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


});