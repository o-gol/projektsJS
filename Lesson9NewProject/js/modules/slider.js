function slider(){

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



}

export default slider;