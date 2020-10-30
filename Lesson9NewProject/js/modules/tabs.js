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

export default tubs;