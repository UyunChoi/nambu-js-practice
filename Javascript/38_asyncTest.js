console.log('1번');
setTimeout(() => {
    console.log('2번');
},1000);
console.log('3번');

function asyncTest(name, callback){
    console.log(`타이머 시작`);
    setTimeout(() => {
        callback(name);
    }, 300);
}

function doOtherthing(){
    for (let i = 0; i < 10; i++){
        const print = {i};
        console.log(`${print} // ${typeof(print)}`);
    }
}

const sayHello = (input) => {
    console.log(`Hi, ${input}`);
}

asyncTest('뷔', sayHello);
doOtherthing();