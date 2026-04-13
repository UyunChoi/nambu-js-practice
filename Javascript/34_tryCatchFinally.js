/* try-catch-finally 예외처리 */
// finally : 에러 발생 유무랑 상관없이 파일을 닫을때 같은 경우?

try{
    //실행할 코드
}catch(error){
    //에러 발생시
}

try{
    console.log(a); // 선언X
}catch(error){
    console.log('에러 발생');
}

try{
    console.log('실행'); // 선언X
}catch(e){
    console.log('에러');
} finally {
    
}