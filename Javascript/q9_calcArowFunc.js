const add = (a,b) => a + b ;
const sub = (a,b) => a - b ;
const div = (a,b) => a / b ;
const mult = (a,b) => a * b ;

const calc2 = (a, operation, b) => {
    return operation(a,b);
};

console.log(calc2(1,add,-2));                   //-1
console.log(calc2(2,sub,-7));                   //9
console.log(calc2(3,mult,'2'));                 //6
console.log(calc2(4,div,0));                    //Infinity
console.log(calc2(5,mult,calc2(4,div,-0)));     //-Infinity
console.log(calc2(5,mult,calc2(4,div,'-0')));   //-Infinity
//console.log(calc2(5,mult,calc2(4,div,-영)));  //-Infinity
//console.log(calc2(2,(a,b) => a - b,-7));        //9


/* 비교하기 - 타입 관련 에러 */
function calc(num1, operation, num2){
    switch(operation){
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default :
            return `입력한 값이 올바르지 않습니다.`;    
    }
    // result 변수 써서 예쁘게 작성해보기
    // return 여러개 쓰는 거 피하기
}
/* 
console.log(calc(1, '+', -5));      // -4
console.log(calc(-2, '-', -10));    // 8
console.log(calc(-3, '*', false));  // -0
console.log(calc(4, '/', 0));       // Infinity
console.log(calc(4, '/', -0));      // -Infinity
console.log(calc(4, '/', '-영'));    // NaN
//console.log(calc(5, '/', -영));    // ReferenceError 
*/