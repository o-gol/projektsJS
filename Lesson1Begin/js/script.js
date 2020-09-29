//'use strict'

//let numberOfFilms;


// function quastion(){
//     while(numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)){
//     numberOfFilms = +prompt("How mach films you'r woching yet&", 0);
//     }
// }
// quastion();

let personalMovieDB = {
    count: "",
    movie: {},
    actor: "",
    genres: [],
    privat: true,

    quastion: function () {
        while (personalMovieDB[this.count] == '' ||
            personalMovieDB[this.count] == null ||
            isNaN(personalMovieDB[this.count])) {
            personalMovieDB[this.count] = +prompt("How mach films you'r woching yet&", 0);
        }
    },

    writeToDB: function () {
        let logan = null,
            rotation = null;
        for (let i = 0; i < 2; i++) {

            // while (
            //     logan == null || rotation == null ||
            //     (!(logan.length > 0 && rotation.length > 0)) ||
            //     (!(logan.length < 50 && rotation.length < 50))
            //     ) 

            while (
                logan == null || rotation == null ||
                logan.length < 1 || rotation.length < 1 ||
                logan.length > 50 || rotation.length > 50 || isNaN(rotation)
            ) {
                console.log(logan);
                console.log(rotation);

                // console.log("!(%s&&%s)=%s", logan.length > 0,
                //     rotation.length > 0,
                //     !(logan.length > 0 && rotation.length > 0));

                logan = prompt("You last film?", "");
                rotation = prompt("you rotation of this film?", "");
            }
            console.log("Count of itaration %s", i);
            personalMovieDB.movie[logan] = rotation;
            logan = null;
            rotation = null;
            //console.log("%s-%s l.log,l.rot", logan.length, rotation.length);
            console.log("Count of itaration %s", i);
        }


    },

    showMyDB: function () {
        if (personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log("unevelibal");
        }

    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            console.log("in metod toggleVisibleMyDB-false1 ", personalMovieDB)
            personalMovieDB.privat = false;
            console.log("in metod toggleVisibleMyDB-false2 ", personalMovieDB)
            //console.log(personalMovieDB.privat);
        } else {
            console.log("in metod toggleVisibleMyDB-true ", personalMovieDB)
            personalMovieDB.privat = true;
            console.log("in metod toggleVisibleMyDB-true2 ", personalMovieDB)
            //console.log(personalMovieDB.privat);
        }
    },

    writeYouGenres: function(){
        
        
            let genres1=[];

            while(genres1==null||
                genres1==''
                //isNaN(genres)||
                //genres<0||
                 //genres>4
                 ){
                genres1=prompt(`You favorite personalMovieDB.genres..? `).toLowerCase();
                
            }
            
           personalMovieDB.genres=genres1.split(", ");
           personalMovieDB.genres.sort();
            // console.log("Любимфй жанр %s - %s ",
            // Object.keys(personalMovieDB.genres),
            // personalMovieDB.genres[i]);
            
        
        //let i=1;

        //Array.prototype.forEach.call(personalMovieDB.genres,item)

        personalMovieDB.genres.forEach((item, i)=> {
            console.log("Любимфй жанр %s - %s ",i+1,item);
        });


    }
    // writeYouGenres: function(){
        
    //     for (let i = 0; i < 3; i++){
    //         let genres1;

    //         while(genres1==null||
    //             genres1==''
    //             //isNaN(genres)||
    //             //genres<0||
    //              //genres>4
    //              ){
    //             genres1=prompt("You favorite personalMovieDB.genres..? ");

    //         }
    //         personalMovieDB.genres[i]=genres1;
    //         // console.log("Любимфй жанр %s - %s ",
    //         // Object.keys(personalMovieDB.genres),
    //         // personalMovieDB.genres[i]);
            
    //     } 
    //     //let i=1;

    //     //Array.prototype.forEach.call(personalMovieDB.genres,item)

    //     personalMovieDB.genres.forEach((item, i)=> {
    //         console.log("Любимфй жанр %s - %s ",i+1,item);
    //     });


    // }

};
//console.log(personalMovieDB);
// personalMovieDB.toggleVisibleMyDB();
// //console.log(personalMovieDB);
// personalMovieDB.showMyDB();
// //console.log(personalMovieDB);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
personalMovieDB.writeYouGenres();
console.log(personalMovieDB);







// function writeToDB(){
//     for (let i = 0; i < 2; i++) {

//         // while (
//         //     logan == null || rotation == null ||
//         //     (!(logan.length > 0 && rotation.length > 0)) ||
//         //     (!(logan.length < 50 && rotation.length < 50))
//         //     ) 

//         while (
//              logan == null || rotation == null ||
//                logan.length < 1 || rotation.length < 1 ||
//                  logan.length > 50 || rotation.length > 50 || isNaN(rotation)
//                 )
//         {
//             console.log(logan);
//             console.log(rotation);

//             // console.log("!(%s&&%s)=%s", logan.length > 0,
//             //     rotation.length > 0,
//             //     !(logan.length > 0 && rotation.length > 0));

//             logan = prompt("You last film?", "");
//             rotation = prompt("you rotation of this film?", "");
//         }
//         console.log("Count of itaration %s",i);
//         personalMovieDB.movie[logan] = rotation;
//         logan = null;
//         rotation = null;
//         //console.log("%s-%s l.log,l.rot", logan.length, rotation.length);
//         console.log("Count of itaration %s",i);
//     }

// }


//writeToDB();

// function showMyDB() {
//     if (personalMovieDB.privat) {
//         console.log(personalMovieDB);
//     } else {
//         console.log("unevelibal");
//     }
// }


//showMyDB();






//personalMovieDB.count=numberOfFilms;
// console.log("%s numberOfFilms",personalMovieDB.count);
// logan=prompt("You last film?","");
// rotation =+prompt("you rotation of this film?","");
// personalMovieDB.movie={[logan]:rotation};
// logan=prompt("You last film?","");
// rotation =+prompt("you rotation of this film?","");
// personalMovieDB.movie[logan]=rotation;
// console.log(personalMovieDB);
//-------------------------------------

// let keys=Object.keys(personalMovieDB.movie);
// for (let i = 0; i < keys.length; i++) {
//     console.log("%s-%s фильм оценка",
// keys[i],
// personalMovieDB.movie[keys[i]]);}




//------------------------------------------------------------    
// keys[i] - это ключ
// obj[keys[i]] - а это свойство, доступное по этому ключу

// personalMovieDB.movie.logan=rotation;
// logan=prompt("You last film?","");
// rotation =prompt("you rotation of this film?","");
// personalMovieDB.movie.logan=rotation;
// console.log(personalMovieDB.numberOfFilms);
// console.log(personalMovieDB.movie);










// alert("Hello Word");
// const result=confirm("Are you here");
// console.log(result);
// const answer=+prompt("вам есть 18", 18);
// console.log(answer);
// const answer=[];
// answer[0]=prompt("your name?","");
// answer[1]=prompt("yor surname","");
// answer[2]=+prompt("your age?","");
// document.write(answer);