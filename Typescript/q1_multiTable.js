function printMult(input) {
    let factor = input;
    for (let mult = 1; mult <= 9; mult++) {
        console.log(`${factor} X ${mult} = ${factor * mult}`);
    }
}
printMult(3);
export {};
