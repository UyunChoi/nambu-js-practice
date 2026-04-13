//고차함수

// map()
const nums = [1, 2, 3, 4, 5];

// filter() //매개변수 -> 함수
const evenNumbers = nums.filter((ele) => {
    // 결과가 true면 통과
    return ele % 2 === 0;
});

//reduce() //줄이다 // item 2 -> 함수,초기값
//한번 더 생각해보기

const total = nums.reduce((acc,cur) => {
    return acc + cur;
},0);
