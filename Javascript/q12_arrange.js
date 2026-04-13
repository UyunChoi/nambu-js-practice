const bts = ['RM', '진', '슈가', '제이홉', '지민', '뷔', '정국'];
const list = ['슈가', '차은우', '박서준','이도현', '제이홉', '주우재', '지민'];

//splice -> 제외
//slice -> 뺀것만

//index -> o // for // forEach
//index -> x // for of

/* 
list.forEach(() => {
    
}); 
*/
let findResult = [];
for(element of bts){
    //indludes
    if(bts.includes(element)){
        findResult.push(element);
    }
}
let printResult = findResult.join();
console.log(printResult);

//filter()사용
//한줄로 작성해보기 //체이닝???? -> 옵셔널 체이닝 추가로 찾아보기
let findBts = list.filter((member) => {
    bts.includes(member);
}).join();

// findBts = list.filter((member) => bts.includes(member)).join();

console.log(findBts);
