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
console.log(calc(1, '+', -5));      // -4
console.log(calc(-2, '-', -10));    // 8
console.log(calc(-3, '*', false));  // -0
console.log(calc(4, '/', 0));       // Infinity
console.log(calc(5, '/', -0));      // -Infinity
console.log(calc(5, '/', '-영'));    // NaN
//console.log(calc(5, '/', -영));    // ReferenceError