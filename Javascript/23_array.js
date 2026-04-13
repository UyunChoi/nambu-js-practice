/* collection Type (집단자료형) */ 
//array

const array = new Array(2);
console.log(array);

array = new Array(1, 2, 3, 4, 5);
console.log(array);

//추가

//제거




// Array 활용
let bts1 = [];
let bts2 = new Array(); //내부적으로 생성자함수가 실행 됨

// 추가
bts1.push('like stack');
bts2.unshift // shift(뒤에서 큐처럼 밀어냄)의 역방향

//splice() -> splice 된 배열 반환 -> 제거된 부분 제외하고
//삭제
const spliceDel = bts1(1,3); 

//추가

//slice() -> 원 배열에 변경사항 없음 -> 잘려진 부분으로 새로운 배열

//sort() -> 아스키코드(ASC) 기준 // 8비트 -> 256 (문자와 매칭) 
//오름차순


// Output : [1, 10, 100, 25, 40, 5] (incorrect for numbers)
// 문자열처럼 정렬
// 웹페이지에서 제일 중요한 것은 문자열이기 때문

//sort() 매개변수 // 정렬

//오름차순 정렬
//n1 - n2 > 0이면 자리 바꿈
let numbers = new Array(1, 2, 3, 4, 5);
numbers.sort(function(n1, n2){return n1 - n2});

const items = [
    { },
    {},
    {}
];

//string1.localCompare(string2)