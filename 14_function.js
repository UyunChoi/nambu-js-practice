function sayHello(){
    console.log(`Hello`);
}
sayHello();

function callName(name){
    console.log(`name : ${name}`);
}

// 약타입
callName('string');
callName(0);
callName(true);