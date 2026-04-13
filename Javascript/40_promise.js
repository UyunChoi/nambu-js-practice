export { url, fetch };
// 선언
const promise = new Promise((resolve,reject) => {
    const success = true;
    if(success){
        resolve(`작업성공`);
    }else{
        reject(`작업실패`);
    }
})

//실행
promise
    .then((parameter) => {
        console.log(`결과 : `, parameter);
    }) //화살표함수 대신 -> console.log;? -> console.callback
    .catch((error) => {
        console.log(`결과 : `, error);
    });// -> console.error; // success = false;


const p = new Promise((res) => {
    console.log(`1. Promise 실행`);
    res(10);
})

console.log(`2. 코드 계속 실행`);

p.then((input) => {
    console.log(`3. then 실행 :`, input);
});


/* Promise - 체이닝 */
// promise는 promise를 반환
const p1 = new Promise((res, rej) => {
    const result = 10;
    res(result);
});

const p2 = p1.then((p1then) => p1then + 1); //반환 : resolve(undefined);
p2.then((p2then) => console.log(p2then));

//11
p1.then((p1then) => p1then + 1).then((p2then) => console.log(p2then));


/* 즉시 성공 Promise */
// reject을 생각하지 않아도 될 때
// (1)생성자 함수
new Promise((res) => {  // 11
    res(10);
});

// (2)-1
Promise.resolve(10);    // 11
// Promise.res(10);
/* TypeError: Promise.res is not a function
    at Object.<anonymous> (/Users/lucy/FullStackWeb/Javascript/40_promise.js:56:9)
    at Module._compile (node:internal/modules/cjs/loader:1812:14)
    at Object..js (node:internal/modules/cjs/loader:1943:10)
    at Module.load (node:internal/modules/cjs/loader:1533:32)
    at Module._load (node:internal/modules/cjs/loader:1335:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47
 */

// (2)-2 : return 값으로 반환
function getData(){
    return Promise.resolve('즉시 성공 Promise : (2)-2 : 데이터');
}
getData().then(console.log);

// (3)체이닝
Promise.resolve(1)
    .then((n) => n+1)
    .then((n) => console.log(n));


/* 즉시 실패 Promise */
Promise.reject('즉시 실패 Promise : 에러').catch(console.log);

function checkAdult(age) {
    // reject의 상황을 만들어야 하니까
    if(age < 18) {
        return Promise.reject('미성년');
    }
    return Promise.resolve('성년'); // return으로 함수가 종료 되었음으로
}

//checkAdult(15).catch(console.log);
checkAdult(28).then(console.log).catch(console.log);


/* Promise - 회원가입 */
const DB = [];

function saveDB1(user) {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`(1)저장 완료 : ${user.name}`);
    return new Promise ((res, rej) => {
        if(DB.length > oldDBLength){
            res(user);
        }else{
            rej(new Error(`(1)저장 실패`));
        }
    });
}

function saveDB2(user){
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`(2)저장 완료 : ${user.name}`);
    Promise
        .then(DB.length > oldDBLength && user)
        .catch(new Error(`(2)저장 실패`))
}

/* Promise - 회원가입 */
function sendEmail(user) {

}

function getResult1(user) {
    return new promise((resolve) => {
        resolve(`등록 성공 : ${user.uname}`);
    });
}

function getResult2(user) {
    Promise.resolve(`등록 성공 : ${user.uname}`)
}

/* Promise - 회원가입 */
//catch -> 각각 처리할 수 있음 -> catch 앞에 있는 것들만 처리 가능
// 백엔드 API -> 그 단계, 파싱 등등



/* Promise - 영화정보 */
// 백엔드 API 요청 - 응답
// 브라우저 : http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json
    // 계층 구조 
// restAPI 만들어보기 // 그래프?

// AJAX?
// json : java script object not?
// fetch - 브라우저에서 지원하는 함수
//const printRank = [];

const url =
'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json'; 
//api의 url

fetch(url)
    .then((respones) => respones.json()) // Promiseresolve(res.json());
    .catch(() => console.log('요청 실패')) 
    //.catch((e) => console.log('요청 실패 : ' + e.message)
    .then((data) => {
        // 데이터 검증
        // 실패한 정보도 result.ok ... json으로 전달받음 
        // //실패한 데이터인지 아닌지 구별 필요
        
        //data를 전달받았는가
        if(!data){

        }
        //존재 없거나 갯수가 없을 때 
        if(!data.articleList || data.articleList.length === 0){

        }
        return data.articleList; ////메타데이터 필요없음 
        // Promise.resolve(data.articleList);
    })
    .catch((error) => console.error())
    .then((articles) => {
        return articles.map((article, index) => ({title:article.title, rank:index+1})); // 순위를 임의로 부여하였음
    })  //Promise.resolve([{art,index}...{}])
    //.catch() : 인덱스를 출력하지 못함?
    .then((arrMovies) => {
        for(let movie of arrMovies) {
            console.log(`[${movie.index}위] ${movie.article}`);
        }
    })
    .catch((e) => console.log(e));



/* Promise - 영화정보 */


/* Promise - 영화정보 */



