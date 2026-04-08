function multTable(factor){
    let print;
    for(let multiple = 1; multiple < 10; multiple++){
        print = `${factor} x ${multiple} = ${factor * multiple}`;
        console.log(print);
    }
}
multTable(3);