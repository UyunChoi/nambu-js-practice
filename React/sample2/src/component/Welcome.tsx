interface WelcomeProps {
  name:string;
}


/* 
function Welcome(props:WelcomeProps) {
  return();
}
 */


/* 예시 : 
<h1 class='head' id='id' name='name'></h1>

HTML 속성 전달시 객체로 전달됨

{
  class : head
  id : id
  name : name
}

자바스크립트 표현식을 쓰려면 {}
 */


function Welcome(props:WelcomeProps) {
  return(
    <>
      <h1>Welcome, {props.name}님</h1>
    </>
  );
}

export default Welcome;