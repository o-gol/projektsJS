// `use strict`;

// try {
//     console.log(`normal`);
//     console.log(a);
//     console.log(`result`);

// } catch (e) {
//     console.log(e); 
//     console.log(e.name); 
//     console.log(e.message); 
//     console.log(e.stack); 
// } finally{

// }


//console.log(a);
try{
document.querySelector(`.active`).addEventListener(`click`,()=>{
    console.log(`click`);
});
} catch(e){
    console.log(e);
}
console.log(`still normal`);

