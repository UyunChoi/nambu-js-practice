import { url, fetch} from '40_promise';
async function func1() {
    return 'hello';
}

func1().then(console.log);


async function func3() {
//async function func3(params) {
    
}


/* async/await - 회원가입 */
async function registerByAsync(user) {
    try{
        const saveUser = await saveDB1(user);
        const emailedUser = await sendEmail(saveUser);
        const result = await getResult(emailedUser);
        return result;
    }catch(e){
        return new Error(e); 
    }
}

const myUser = { uname: '손흥민', email: 'son@naver.com' };
registerByAsync(myUser).then(console.log);

/* async/await - 영화정보 */

// 1. 데이터 가져오기(fetch)
function fetchMovieData(url) {
    const res = await fetch(url);
}

// 2. 데이터 검증
function validateMovieData(data) {
    
}

// 3. 영화 정보 추출
function extractMovieInfos(articleList) {
    
}

// 4. 영화 출력
function displayMovies(movieinfo) {
    
}
