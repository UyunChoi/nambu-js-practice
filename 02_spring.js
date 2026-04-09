/* string */
let stringEx = '안녕하세요(1)';
stringEx = "안녕하세요(2)";
stringEx = `안녕하세요(3)`;

stringEx = '"안녕하세요(4)"';
stringEx = '`안녕하세요(5)`';

stringEx = "'안녕하세요(6)'";
stringEx = "`안녕하세요(7)`";

stringEx = `'안녕하세요(8)'`; // Template Literal
stringEx = `"안녕하세요(9)"`;

let temp = `stringEx : ${stringEx}`;
// 자바스크립트 파일의 마지막 줄에 로그점을 찍으면, 노드(Node.js) 프로세스가 로그를 출력하기도 전에 프로그램이 종료되어 버리는 경우가 많습니다. // -> console.log(temp);