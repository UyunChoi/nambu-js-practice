import { createContext, useContext } from "react";

type Theme = 
| { mode : 'light' }
| { mode : 'dark'};

type ThemeContextType = {
  theme : Theme;
  toggleTheme : () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme : {mode : 'light'},
  toggleTheme: () => {
    console.log(`test: creatContext`);
  }
});

export {ThemeContext};
export type {Theme, ThemeContextType};