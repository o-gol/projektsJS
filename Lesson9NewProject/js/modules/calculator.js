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
export default calculator;