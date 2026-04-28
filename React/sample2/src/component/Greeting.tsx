type GreetingProps = {
  isLoggedIn : boolean;
}

const UserGreeting = () => {
  return (<>
    <h1>환영합니다.</h1>
  </>);
};

const GuestGreeting = () => {
  return (<>
    <h1>회원가입을 해주세요.</h1>
  </>);
}

const Greeting = ({isLoggedIn}:GreetingProps) => {
  return(
    isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
  );
}

export {UserGreeting, GuestGreeting, Greeting,};
export type {GreetingProps};