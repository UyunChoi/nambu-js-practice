/* Short-circuit Evaluation 단축 평가 */

console.log(true && 'hello');   //hello
console.log(false && 'hello');  //false

console.log(true || 'hello');   //true
console.log(false || 'hello');  //hello

//if로 쌓여 있다고 생각한다면?

// 사용자가 이름을 입력하지 않았을 때(null 또는 undefined) 기본값 할당
let userName = '';
let displayName = userName || 'Guest';
