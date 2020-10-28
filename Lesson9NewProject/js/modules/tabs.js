function tubs(){

    const tabheaderItems = document.querySelectorAll(`.tabheader__item`),
        tabheaderItem = document.querySelector(`.tabheader__items`),
        tabcontainers = document.querySelectorAll(`.tabcontent`);
    const tabcontainer = document.querySelector(`.tabcontainer`);



    let flag = 0;

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



}

export default tubs;