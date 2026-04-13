function add(a,b){
    return a + b;
}

function funcAddPrint(expression){
    console.log(expression);
}

funcAddPrint(add);
funcAddPrint(add(4,5));