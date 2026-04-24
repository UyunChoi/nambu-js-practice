/* 산술 연산자 */
let num1 = 5;
let num2 = 3;

-num1;
let result;

result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;
// 실수로 반환하는지 정수로 반환하는지 확인 필요


/* 비교 연산자 */
let num3 = '3';
console.log(3 == num2);
console.log(3 == num3);
console.log(3 === num2);
console.log(3 === num3);

console.log(3 != num2);
console.log(3 != num3);
console.log(3 !== num2);
console.log(2 !== num3);


/* 비교, 논리 연산자 */
let a = 0;
let b = 1;

// NOT !
print(!a);

// AND &&
print(a&&b);

// OR ||
print (a||b);


/* 비교, 논리연산자 실습 */



/* 대입연산자 */



/* 증감연산자 */



/* 대입, 증감 연산자 (후취/전취) */
num1 = 1;
console.log(num1++);
console.log();
let num = num++; // num -> undefind (?)
console.log(num); // NaN (?)
console.log(num = num1++);


/* 삼항 조건 연산자 */


/* 연산자 우선순위 */