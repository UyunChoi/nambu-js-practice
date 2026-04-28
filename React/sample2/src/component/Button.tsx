type ButtonProps = {
  onClick : () => void;
}

const LoginButton = ({onClick}:ButtonProps) => {
  return (<>
    <button onClick={onClick}>로그인</button>
  </>);
};

const LogoutButton = ({onClick}:ButtonProps) => {
  return(<>
    <button onClick={onClick}>로그아웃</button>
  </>);
};

export {LoginButton, LogoutButton};