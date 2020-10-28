function modal(){

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
const idTimer = setTimeout(showModal, 5000);
window.addEventListener(`scroll`,showModalbyScrol);
//------------------------- End ModalWindow

}
export default modal;