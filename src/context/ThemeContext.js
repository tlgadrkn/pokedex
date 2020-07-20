import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    theme: "light",
  });
  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};
