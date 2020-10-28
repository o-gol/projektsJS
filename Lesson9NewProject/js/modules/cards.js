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


export default cards;

