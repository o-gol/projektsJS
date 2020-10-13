`use strict`;
// cd Lesson9NewProject 
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

    async function menuItemInit(){
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
        .then((data)=>{

            data.data
                .forEach(item=>{
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











const menuItemsComments={
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

    async function  postConnect  (url, headers1, body1) {
        return await fetch(url, {
            method: `POST`,
            headers: headers1,
            body: body1

        })
        .then((response) => response.json())
        ;
    }
    async function  getConnect  (url) {

        const res= await fetch(url);
        if(!res.ok){
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


            const infoFormData=new FormData(form);
            console.log(Object.fromEntries( infoFormData.entries()));
            const jsonInfoFormData=JSON
            .stringify(Object.fromEntries( infoFormData.entries()));

            
            



            postConnect(`http://localhost:3000/requests`, {"Content-Type": "application/json; charset=UTF-8"}, JSON.stringify(info))
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

    const slider=document.querySelector(`.offer__slider`);
    //console.log(slider);
    const sliderWrapper=slider.querySelectorAll(`.offer__slide`);
    const sliderNext=slider.querySelectorAll(`.offer__slider-next`);
    const sliderPrev=slider.querySelectorAll(`.offer__slider-prev`);
    const current=slider.querySelector(`#current`);
    const total=slider.querySelector(`#total`);
    const numOfSlider=0;
    function showHideElementsByNum(element,num){
        element.forEach((item,i, arr)=>{
            total.innerHTML=returnZero(arr.length);
            if(i==num){
                item.classList.add(`show`);
                item.classList.remove(`hide`);
                current.innerHTML=returnZero(num+1);
                
                
            }else{
                item.classList.add(`hide`);
                item.classList.remove(`show`);

            }
        });

    }

    showHideElementsByNum(sliderWrapper, numOfSlider);
    


    

    sliderNext.addEventListener(`click`, ()=>{

        showHideElementsByNum(sliderWrapper, numOfSlider);

    });


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