/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener(`DOMContentLoaded`, ()=>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Мой фильмец",
            "Еще один мой фильмец"
        ]
    };
    
    
    
    const promoAdv=document.querySelector(".promo__adv"),
    promoGenre=document.querySelector(".promo__genre"),
    promoBg=document.querySelector(".promo__bg"),
    promoInteractiveList=document
                                    .querySelector(".promo__interactive-list"),
    body=document.getElementsByTagName("body"),
    btnInput=document.querySelector(`.add`).querySelector(`button`),
    formInput=document.querySelector(`.adding__input`),
    checkBox=document.querySelector(`input[type="checkbox"]`);
    
    
    
    
    
    //console.log(checkBox);
    
    
    
    promoAdv.remove();
    
    promoGenre.textContent="Драма";
    
    promoBg.style.cssText=`background: url("img/bg.jpg") center center/cover no-repeat`;
    
    addMovieArryToDB(movieDB.movies);
    
    btnInput.addEventListener(`click`,
    (e)=>{
     if(checkBox.checked){
        console.log(`${formInput.value}-твой любимый фильм`);
        checkBox.checked=false;
        
    }   
    //console.log(formInput.value);
    addMovieToDB(e,movieDB.movies,formInput.value) ;
    
    
    });
    // movieDB.movies.forEach(item=>{
    //     item.toUpperCase();
    // });
    
    // movieDB.movies.sort();
    
    
    
    // addDeleteLissoner(promoInteractiveList,movieDB.movies);
    
    // movieDB.movies.forEach((item,i)=>{
    //     promoInteractiveList.innerHTML+=`
    //     <li class="promo__interactive-item">${i+1}. ${item}
    //         <div class="delete"></div>
    //     </li>
    //     `;
    // });
    
    function addMovieToDB (e,arr,movie) {
        e.preventDefault();
        console.log(movie.length);
        while(true){
        if(movie==``){
            break;
        
        }else if(movie.length<21){
        
        arr[arr.length]=movie.toUpperCase();
        // promoInteractiveList.innerHTML+=`
        // <li class="promo__interactive-item">${arr.length}. ${arr[arr.length-1]}
        //     <div class="delete"></div>
        // </li>
        // `;
        addMovieArryToDB(arr);
        //console.log(formInput);
        formInput.value="";
        //formInput.innerHTML=`<input class="adding__input" type="text" placeholder="Что уже посмотрено...?">`;
        break;
        }else if(movie.length>21){
            let movieNew;
            let arr1=movie.split("",17);
            movie=arr1.join("")+"...";
            //console.log(movie.length);
            addMovieToDB(e,arr,movie);
            //addMovieToDB1(arr);
            break;
    
        }
    }
        
    }
    
    function addMovieArryToDB (arr) {
        arr.forEach((item,i)=>{
            item=item.toUpperCase();
            arr[i]=item;
    
        });
        console.log(arr);
        arr.sort();
        promoInteractiveList.innerHTML="";
        arr.forEach((item,i)=>{
        promoInteractiveList.innerHTML+=`
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
            `;
        });
        addDeleteLissoner(promoInteractiveList,arr);
    }
    
    function addDeleteLissoner(list,arry){
        const deleteMovieElement=list.querySelectorAll(`.delete`);
        deleteMovieElement.forEach((item,i)=>{
            //console.log(item);
            item.addEventListener('click',()=>removeMovieFromDB(item,i,arry));
    
        });
    }
    
    function removeMovieFromDB (deleter,i,arry){
        
        //console.log(film.innerText.split(". ")[1]);
        //console.log(arr[1]);
        //arry.forEach((item, i)=>{
            //console.log(item);
            //console.log(item.toUpperCase());
            //console.log(deleter.parentElement.innerText.split(". ")[1]);
            // if(item.toUpperCase()==deleter.parentElement.innerText.split(". ")[1]){
            //     //console.log(i);
            //     arry.splice(i,1);
            // }
            
    
        //});

        arry.splice(i,1);
        deleter.parentElement.remove();
        addMovieArryToDB(arry);
        console.log(arry);
    
    }
    
    // function removeMovieFromDB (){
    //     const deleteElements=document.querySelectorAll(`.delete`);
    //     const film=deleteElements[0].parentElement;
    //     const arr=film.innerText.split(". ");
    //     //console.log(film.innerText.split(". ")[1]);
    //     //console.log(arr[1]);
    //     movieDB.movies.forEach((item, i)=>{
    //         console.log(item.toUpperCase());
    //         console.log(film.innerText.split(". ")[1]);
    //         if(item.toUpperCase()==film.innerText.split(". ")[1]){
    //             movieDB.movies.splice(i,1);
    //         }
    
    //     });
    //     deleteElements[0].parentElement.remove();
    
    //     addMovieToDB(movieDB.movies);
    
    // }
    
    
    
    //removeMovieFromDB();
    
    
    
    
    
    
    
    //const 
    // body[0].setAttribute("background","img/bg.jpg");
    
    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */
    
    // Возьмите свой код из предыдущей практики
    
    
    
    
    
    
    
    
    
    // btnInput.addEventListener(`click`, (e)=>{
    //     e.preventDefault();
    //     const movieName=document
    //         .querySelector(`.adding__input`).value;   
    //     movieDB.movies[movieDB.movies.length]=movieName;
    //     console.log(movieDB.movies);
    
    
    // });
    
    
    // btnInput.addEventListener(`click`,
    // (e)=>{
    // addMovieToDB(e,movieDB.movies,document
    //              .querySelector(`.adding__input`).value) ;
    // console.log(document
    //     .querySelector(`.adding__input`).value);
    // });

});





