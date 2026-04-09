/* spread 연산자 */
//라이브러리, 프레임워크, 협업시 필요

//array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

//object
const person = {
    noame: 'RM',
    age : 20
};
const copy = {...person};
console.log(copy);

//자주 사용함
const mrSon = { name : '손흥민', age : 20};
const newSon = {...mrSon, age : 21};
console.log(newSon);