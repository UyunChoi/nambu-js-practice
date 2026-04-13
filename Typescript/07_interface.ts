//백엔드에서 json 받아올때 → 인터페이스로 처리함
//대조군
const person0 = {name:'', age: 0};

interface Person {
    name: string; 
    age: number;
}

// 영화정보출력하기
// interface 첫글자 -> 대문자
interface MovieInfo {
    title: string;
    ranking: number | string | void;
}

const ranking1: MovieInfo = {title:`No.1`, ranking:1};
const ranking2: MovieInfo = {title:`No.2`, ranking:'이'};
// const rankingEtc: MovieInfo = {title:`No.100`, void};
// const rankingEtc: MovieInfo = {title:`No.100`, ranking};
const rankingEtc: MovieInfo = {title:`No.100`, ranking: undefined};