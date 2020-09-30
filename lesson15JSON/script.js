`use strict`;

const person={
    name:`Alex`,
    tel: `222334455`,
    parents: {
        mam:`Ann`,
        dad: `Stiv`

    }
};
//  console.log(JSON.stringify(person));
//  console.log(JSON.parse(JSON.stringify(person)));
 const clone=JSON.parse(JSON.stringify(person));
 console.log(person);
 console.log(clone);

 clone.parents.dad=`Tomy`;

 console.log(person);
 console.log(clone);

