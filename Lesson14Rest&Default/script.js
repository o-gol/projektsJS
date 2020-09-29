const log1=function(a,b,...rest){
    console.log(a,b,rest);

};
log1(`basic`,`rest`,`operator`,`usage`);

function colcOrDouble(number, basis=2){
    //basis=basis||2;
    console.log(number*basis);
}

colcOrDouble(3);