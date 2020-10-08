`use strict`;
//-------------------------filter


const names =[`Ivan`, `Anna`, `Ksenia`, `Voldemart`];
const shortName= names.filter((name)=>{
    return name.length<5;
});
console.log(shortName);

//--------------------------map

let answers=[`IvAn`,`AnnA`,`HELLO`];
answers = answers.map((item)=>{

    return item.toLowerCase();

});
console.log(answers);

//---------------------every/some


//let som=[4, `IvAn`,`AnnA`,`HELLO`];
let som=[4,5, 7];

console.log(som.some((item)=>{
            return typeof(item)===`number`;
}));
console.log(som.every((item)=>{
            return typeof(item)===`number`;
}));

//--------------------reduce
let someName=[4, `IvAn`,`AnnA`,`HELLO`];
let arr=[4,5,7,12,4,5];
                        // 0       4  --первая итерация (sum-то что приходит от заданной функции; current-элементы массива (коллекции) по порядку)
                        // 4       5  --вторая итерация
                        // 9       7  --третья итерация
                        // 16      12 --третья итерация
    const res=arr.reduce((sum, current)=>{ 
    return sum+current;

}, 2); // цифра 3 указывает начальное значение, т.е цифрв которую надо дабовлять
console.log(res);

    const resName=someName.reduce((sum, current)=>{ 
    return `${sum}, ${current}`;

});

console.log(resName);


//-------------------------Exemple

const obj={
    ivan: `persone`,
    ann: `persone`,
    dog:`animal`,
    cat:`animal`
};

const key = Object.keys(obj)
.filter((key)=>obj[key]==`persone`)
//.reduce((name,current)=>`${name}, ${current}`)
;

console.log(key);

const key1 = Object.entries(obj)
.filter((key)=>key[1]==`persone`)
.map((name)=>name[0])
//.reduce((name,current)=>`${name}, ${current}`)
;

console.log(key1);
