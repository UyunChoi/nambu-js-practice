/* Control statements */
/* Conditional statements */

/* if */
const age = 15;
const adult = 19;

if(age >= adult){
    console.log(`성인`);
}else{
    console.log(`미성년`);
}

 /* if */
// 중첩
 const gender = '남';

 if(age >= adult){
    console.log(`성인`);
}else{
    console.log(`미성년`);
}

// -> 조건문에 조건 추가 (&&)
let isLoggedIn = true;
let token = 0;

if(isLoggedIn && token){

}else if(isLoggedIn && !token){

}else{

}

// -> 조건문에 조건 추가 (||)
//age = 15;
let isMember = false;

/* 다중선택문 (else if)*/
// 가독성 낮음
// 연산자 ===
// 예외처리 후 브라우저 이름 출력하기
const browser = `크롬`;
let browserName;

/* 다중선택문 (switch case)*/
// break를 의도적으로 빼는 상황은?
const menu = 2;
switch(menu){
    case 1 :
        console.log(`(${menu}) : 아메리카노`);
        break;
    case 2 :
        console.log(`(${menu}) : 라떼`);
        break;
    case 3 :
        console.log(`(${menu}) : 카푸치노`);
        break;
    default :
        console.log(`(${menu}) : 없는 메뉴입니다.`);
}
//break 의도적으로 제외하는 경우 : 1,3 아메리카노를 출력할 경우

// +스코프 활용
const browser1 = 'Chrom';
let browser1Name;

