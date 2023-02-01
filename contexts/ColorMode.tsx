import { Text, View } from "react-native";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ColorModeProps {
  children: ReactNode;
}

interface ColorModeContextTypes {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorModeContext = createContext({} as ColorModeContextTypes);

const ColorMode = ({ children }: ColorModeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ColorModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorMode;

export const useColorMode = () => useContext(ColorModeContext);
