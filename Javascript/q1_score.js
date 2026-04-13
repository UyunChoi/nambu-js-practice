const score = 56;

//min
const A = 90;
const B = 80;
const C = 70;
const D = 60;
const E = 50;
const F = 0;

let level;
if(A <= score){
    level = A;
}else if(B <= score && score < A){
    level = B;
}else if(C <= score && score < B){
    level = C;
}else if(D <= score && score < C){
    level = D;
}else if(E <= score && score < D){
    level = E;
}else{
    level = F;
}
console.log(`당신의 레벨은 ${level+''}입니다.`); //다른 방법 찾아보기
