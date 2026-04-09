let add = 0;
while (add < 5) {
    console.log(`누적 : ${add}`);
    add += 1;
}
// 언제 while 과 for를 쓰는게 좋을까?
// for : 반복횟수
// while : 조건
// 3번 이상 중첩하지 않도록
// 초기화를 안 하고 반복했을때 어떤 결과가 나오는지
let age = 0;
let num = 0;
while (age < 5){
    while(num < 10){
        console.log(`현 age: ${age}`);
        num += 1;
    }
    //num = 0; // 결과값 예측하기
    age += 1;
}

/* do while */
num = 0;

do {
    num +=1;
    console.log(`num: ${num}`);
} while (num < 10)