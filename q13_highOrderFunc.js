const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //이게 꼭 있어야 하나? //다른 방법이 있나?

let evenSum = num.filter(i => (i % 3 === 0))
    .map(j => (j * 2))
    .reduce((acc,cur) => acc + cur);
console.log(evenSum);

// 3의 배수 //3, 6, 9
// 

// 직관적인 변수명 : nums, num (복수와 단수 활용하기)
// reduce 여러방면으로 활용해보기 :  평균 등등

// const total = [item1, item2, item3...].고차함수.고차함수
//  [item1, item2, item3...]. // 내부에서 new Array(item1, item2, item3...)가 실행됨으로