/* 구조 분해 할당 */
// 리액트
const user = {
    name : 'RM',
    age : 30
};

// 기존 방식
const name1 = user.name;
const age2 = user.age;

// 객체 분해 방식
const {name, age} = user;

console.log(name);
console.log(age);

/* 구조 분해 - alias */
const {name : userName, age : userAge} = user;

console.log(userName);
console.log(userAge);

/* 구조 분해 - 객체 매개 변수 */
// 기존 + alias(선행)
function userInfo(user) {
    console.log(`${userName} : ${userAge}`);    
}

// 구조 분해 방식
function printUser({name, age}) {
    console.log(`${name} : ${age}`);    
}