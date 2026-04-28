import { useContext, useState } from "react";
import { ThemeContext, type Theme } from "../types/Theme";
import MainContent from "./MainContent";
const DarkOrLight = () => {
  const [theme, setTheme] = useState<Theme>({mode: 'light'});

  const toggleTheme = () => {
    setTheme((prev)=>(prev.mode === 'light' ? { mode:'dark'} : {mode : 'light'}));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <MainContent/>
    </ThemeContext.Provider>
  );
};

export default DarkOrLight;