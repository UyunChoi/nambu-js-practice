/* 함수형 매개변수
화살표 함수랑 타입 구분하기
*/
//비교군
function sayHello(name) {
    return `Hello, ${name}`;
}
/* let sayHello(name: string):string {
    return `Hello ${name}`;
} */
function greeting(strname, fun) {
    return fun(strname);
}
const guest1 = '손흥민';
const guest2 = '이강인';
const mrSon = greeting(guest1, sayHello);
const mrLee = greeting(guest2, (parameter) => `Hi, ${parameter}`);
console.log(mrLee, mrSon);
export {};
// 자바스크립트 확인 -> 어떻게 컴파일 되는지 이해
