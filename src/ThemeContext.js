import React, { useState, useContext, createContext } from "react";

// Create a ThemeContext object using React.CreateContext()
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  //State to hold the theme
  const [theme, setTheme] = useState("light");
  return (
    //Return a ThemeContext.Provider component with the theme and toggleTheme
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
