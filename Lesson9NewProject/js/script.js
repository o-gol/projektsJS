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
        if (e.target && e.target.classList.contains(`tabheader__item`) && e.target == tabheaderItems[flag]) {} else if (e.target && e.target.classList.contains(`tabheader__item`) ) {
            e.target.classList.toggle(`tabheader__item_active`);
        }

    });

    //ModalWindow

    const callMe = document.querySelectorAll(`[data-model]`),
        modelCaller = document.querySelector(`.modal`),
        modalClose = document.querySelectorAll(`[data-close]`);
   
    function closeModel(){
        modelCaller.classList.add(`hide`);
            modelCaller.classList.remove(`show`);
            document.body.style.overflow = ``;

    }

    function showModal(){
        modelCaller.classList.add(`show`);
            modelCaller.classList.remove(`hide`);
            document.body.style.overflow = `hidden`;
            clearInterval(idTimer);
    }


    function showModalbyScrol(){
        if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            showModal();
            window.removeEventListener(`scroll`,showModalbyScrol);

        }

    }


    callMe.forEach((item) => {
        item.addEventListener(`click`, showModal);
    });


    modalClose.forEach((item) => {
        item.addEventListener(`click`, closeModel);
    });


    modelCaller.addEventListener(`click`,(e)=>{
        //console.log(e.target);
        //if(e.target&&e.target.classList[0]==`modal`){
        if(e.target===modelCaller){
            closeModel();
        }
    });

    document.addEventListener(`keydown`,(e)=>{
        if (e.code===`Escape`&& modelCaller.classList.contains(`show`)){
            console.log(modelCaller.classList[1]);
            closeModel();
        }
    });
    //--------------------------TimeOut and ScrolEnd ModalWindow
    //const idTimer=setTimeout(showModal,5000);
    //window.addEventListener(`scroll`,showModalbyScrol);
    //------------------------- End ModalWindow








    //------------------------- создание Menu Items

    // <div class="menu__item">
    //                 <img src="img/tabs/vegy.jpg" alt="vegy">
    //                 <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
    //                 <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>229</span> грн/день</div>
    //                 </div>
    //  </div>
    
    class MenuItem{
        constructor(imgSrc, alt, subtitle, descr, totalPrice, parent, ...classes ){
            this.imgSrc=imgSrc;
            this.alt=alt;
            this.subtitle=subtitle;
            this.descr=descr;
            this.totalPrice=totalPrice;
            this.classes=classes;
            this.transfer=27;
            this.chengeToUAH();
            this.contaner=document.querySelector(parent);

        }

        chengeToUAH(){
            this.totalPrice=this.totalPrice*this.transfer;

        }

        innerMenuItem(){
            const menuItem=`
                    <img src="${this.imgSrc}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.totalPrice}</span> грн/день</div>
                    </div>
            `;

            let divMenuItem=document.createElement(`div`);


            if(this.classes.length===0){
                this.defaultClass=`menu__item`;
                divMenuItem.classList.add(this.defaultClass);
            }else{
               this.classes.forEach(className => divMenuItem.classList.add(className)); 
            }
            
            
            divMenuItem.innerHTML=menuItem;

            this.contaner.append(divMenuItem);
            //contaner.innerHTML=divMenuItem;




        }



    }


    new MenuItem(`img/tabs/vegy.jpg`,
                                        `vegy`,
                                        `Фитнес`,
                                        `Меню "Фитнес" - это новый подход к приготовлению блюд: 
                                        больше свежих овощей и фруктов.
                                         Продукт активных и здоровых людей. Это абсолютно новый 
                                         продукт с оптимальной ценой и высоким качеством!`,
                                        11,
                                        `.menu__field .container`,
                                        
     ).innerMenuItem();
    new MenuItem(`img/tabs/elite.jpg`,
                                        `elite`,
                                        `Премиум`,
                                        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
                                        15,
                                        `.menu__field .container`,
                                        `menu__item`
     ).innerMenuItem();
    new MenuItem(`img/tabs/post.jpg`,
                                        `post`,
                                        `Постное`,
                                        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
                                        10,
                                        `.menu__field .container`,
                                        `menu__item`
     ).innerMenuItem();

     //fitnesItemMenu.innerMenuItem();


//------------------------- конец Menu Items












    









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