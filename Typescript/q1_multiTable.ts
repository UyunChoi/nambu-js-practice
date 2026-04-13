function printMult(input: number):void{
    let factor = input;
    for (let mult = 1; mult <= 9; mult++){
        console.log(`${factor} X ${mult} = ${factor * mult}`);
    }
}
printMult(3);
