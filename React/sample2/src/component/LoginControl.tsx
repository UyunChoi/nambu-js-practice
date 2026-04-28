import { useState } from "react";
import { Greeting } from "./Greeting";
//import type { GreetingProps } from "./Greeting";
import { LoginButton, LogoutButton } from "./Button";


const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true)
  };
  const handleLogoutClick= () => {
    setIsLoggedIn(false)
  };
  return (<>
    <Greeting isLoggedIn = {isLoggedIn}></Greeting>
    {isLoggedIn ? 
      (<LogoutButton onClick={handleLogoutClick}/>) : 
      (<LoginButton onClick={handleLoginClick}/>)
    }
  </>);
};

export default LoginControl;
