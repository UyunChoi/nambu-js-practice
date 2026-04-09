 /* 연산자
    산술 연산자
    비교 연산자
    논리 연산자
    대입 연산자
    증감 연산자
    삼항 조건 연산자
    
        연산자 우선순위*/


/* 산술 연산자 */
let num5 = 5;
let num3 = 3;

-num5;
let result;

result = num5 + num3;
result = num5 - num3;
result = num5 * num3;
result = num5 / num3;
result = num5 % num3;
// 실수로 반환하는지 정수로 반환하는지 확인 필요


/* 비교 연산자 */
let str3 = '3';
console.log(3 == num3); // 
console.log(3 == str3); // 
console.log(3 === num3);//
console.log(3 === str3);//

console.log(3 != num3); //
console.log(3 != str3); // 
console.log(3 !== num3);// 
console.log(3 !== str3);// 


/* 비교, 논리 연산자 */
let num2 = 2;

console.log(num5 > num3 && num3 > num2);    // true
console.log(num5 == num3 && num3 > num2);   // false
console.log(num5 == num3 || num3 > num2);   // true

console.log(num5 - num3 > num3 - num2 && num3 == 0);// false
console.log(num5 + num3 > num2 || num2 > 0);        // true


/* 대입, 증감 연산자 (후취/전취) */
let num0 = 0;
console.log(num0);  // 0

console.log(num0++);// 0
console.log(num0);  // 1

console.log(num0--);// 1
console.log(num0);  // 0

console.log(num0++);// 0
console.log(num0);  // 1
console.log(++num0);// 2
console.log(num0);  // 2

/* let num = num++; // num -> undefined (?) 
console.log(num); // NaN (?) // undefined (?)

//ReferenceError: Cannot access 'num' before initialization

*/
console.log(`undefined + 1 = ${undefined}`);

let num;
console.log(num);           // undefined

console.log(num = num0++);  // 2
console.log(num);           // 2
console.log(num0);          // 3


/* 삼항 조건 연산자 */
const age = 20;
const checkAdult = age > 19 ? '성인' : '미성년';
console.log(checkAdult);


/* 연산자 우선순위 */
let result2 = num2 + (num3 * 4) / 5;
