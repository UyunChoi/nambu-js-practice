const DB = [];

function save2DB(user, callback) {
    DB.push(user);
    console.log(`${user.name}님 데이터베이스에 저장 완료되었습니다.`);
    return callback(user);
}

function sendEmail(user, callback) {
    console.log(`이메일을 ${user.name}에게 발송하였습니다.`);
    return callback(user);
} 

function getResult(user) {
    const result = `${user.name}님 회원가입이 완료 되었습니다.`;
    console.log(result);
    return result;
}

function register(user) {
    return save2DB(user, (user) => {
        return sendEmail(user, (user) => {
            return getResult(user);
        });
    });
}

const result = register({
    name : '손흥민',
    email : 'son@naver.com'
});
console.log(result);