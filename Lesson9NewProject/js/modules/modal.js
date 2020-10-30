

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
export default modal;
export {closeModel};
export {showModal};