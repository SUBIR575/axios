import React, { useContext, useState } from "react";
 const ThemeContext = React.createContext();
 const ThemeButton = React.createContext()
 export const useTheme = ()=>{
    return useContext(ThemeContext)
 }
 export const useThemeUpdate = ()=>{
    return useContext(ThemeButton)
 }
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => { setTheme((i)=>!i)}
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeButton.Provider value={toggleTheme}>
        {children}
        </ThemeButton.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
