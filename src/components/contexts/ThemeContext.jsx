import { createContext, useState } from "react";

const lightTheme = {
  type: "light",
  colors: {
    primary: "#d80fb0",
    text: "#000",
    background: "#fff",
    lightText: "#fff",
    primaryText: "#2ec4b6",
    darkBackground: "#14213d",
  },
};

const darkTheme = {};

const ThemeContext = createContext(lightTheme, () => {});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toogleTheme = function () {
    const newTheme = theme.type === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    console.log(newTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toogleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, lightTheme, darkTheme, ThemeContext };
