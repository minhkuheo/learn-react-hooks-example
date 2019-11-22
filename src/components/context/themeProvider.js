import React, { createContext, useState, useContext } from 'react';


const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

const ThemeContext = createContext({
  currentTheme: themes.light,
  dark: false,
  themeToggle: () => { }
});

const ThemeProvider = children => {
  const [dark, setDark] = useState(false);

  const myTheme = {
    currentTheme: dark ? themes.light : themes.dark,
    dark,
    themeToggle: () => setDark(!dark),
  };

  return (
    <ThemeContext.Provider value={myTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);

