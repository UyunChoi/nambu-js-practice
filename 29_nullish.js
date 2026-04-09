/* Nullish Coalescing Operator 
널 병합 연산자*/

const name1 = null ?? 'Guest';
const name2 = undefined ?? 'Guest';
const name3 = "RM" ?? "Guest";
const name4 = "" || 'Guest';
const name5 = "" ?? 'Guest';

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);

