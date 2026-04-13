const set = new Set([1,[2,3],4]);
console.log(set);

console.log(set.size);

//item 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

//존재유무
console.log(set.has(3));
console.log(set.has(6));

// 삭제
set.delete(6);
console.log(set);

//순회 - Array랑 똑같음
//forEach
set.forEach((item) => console.log(item));

// for ~ of
for(const value of set.values()){
    console.log();
}

//set.values() - 이터레이터로 만들어줌 // 순회할 수 있게 만들어줌

//map -> 객체를 써도 됨으로 넘으감 

//스프레드 연산자 // 펼치다
const array = [...set];