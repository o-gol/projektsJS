function* generate(){

    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
    



}

const src=generate();

console.log(src.next().value);
console.log(src.next().value);
console.log(src.next().value);
console.log(src.next().value);
console.log(src.next().value);

// console.log(generate().next().value);
// console.log(generate().next().value);
// console.log(generate().next().value);
// console.log(generate().next().value);
// console.log(generate().next().value);
// console.log(generate().next().value);
// console.log(generate().next().value);


function* generate1(n){
    for (let i = 0; i < n; i++) {
        yield console.log(i);
        
    }
}

const src1 = 
generate1(3);

// console.log( src1.next());
// console.log( src1.next());
// console.log( src1.next());
// console.log( src1.next());

src1.next();
src1.next();
src1.next();
src1.next();

for(let k of generate1(7)){
    k;
     //console.log( k);
}


