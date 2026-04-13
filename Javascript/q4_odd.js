// for, continue, %이용 -> 반복문 제한 // (0~10 출력)
let odd;

for(let num = 0; num <11; num++){
    if(num%2 === 0){
        continue;    
    }
    odd = num;
    console.log(odd);
}

// if 안 쓰고도 가능한가? -> (continue -> 조건문이 있어야 성립)
    // 결과값은 똑같이 출력할 수 있다고해도 요구하는 기능을 구현했다고 할 수 있을까?
    // while 조건문임
odd = 0;
for(let num = 0; num <11; num++){

    /* while(){
        continue;
    }  */   
}
//조건문을 해체 해볼 수 있나?

