function add(num1,num2) {
    return num1 + num2;
}
function suv(num1, num2) {
    return num1 + num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function mult(num1, num2){
    return num1 * num2;
}

function calc2(num1, operation, num2){
    //doSomething
    return operation(num1,num2);
}

/* - 함수의 호출
    - 로그인… 등등 상황 상상해보기
    - 백엔드 API 요청하고 응답받기 */

/* 오버로딩? 오버라이딩? */
// 사칙연산 외의 연산 구현해보기