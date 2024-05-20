import React from "react";

const ThemeContext = React.createContext({
    isDarkMode: false,
    toggleDarkMode: () => {}
  });
  

export default ThemeContext;