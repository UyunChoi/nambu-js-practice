const promise = new Promise((resolve,reject) => {

})

const p = new Promise((res) => {
    console.log(`1. Promise 실행`);
    res(10);
})

console.log(`2. 코드 계속 실행`);

p.then((input) => {
    console.log(`3. then 실행 :`, input);
});


// Promise - 체이닝
const p1 = new Promise((res, rej) => {
    const result = 10;
    res(result);
});

const p2 = p1.then((num) => num+1);
