import { MD3LightTheme } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

export const lightTheme: ThemeProp = {
  ...MD3LightTheme,
  colors: {
    primary: "rgb(91, 44, 255)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(229, 222, 255)",
    onPrimaryContainer: "rgb(25, 0, 100)",
    secondary: "rgb(95, 92, 113)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(229, 223, 249)",
    onSecondaryContainer: "rgb(28, 25, 43)",
    tertiary: "rgb(124, 82, 101)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 216, 231)",
    onTertiaryContainer: "rgb(48, 17, 33)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(28, 27, 31)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(28, 27, 31)",
    surfaceVariant: "rgb(229, 224, 236)",
    onSurfaceVariant: "rgb(72, 69, 79)",
    outline: "rgb(121, 118, 127)",
    outlineVariant: "rgb(201, 197, 208)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(49, 48, 51)",
    inverseOnSurface: "rgb(244, 239, 244)",
    inversePrimary: "rgb(200, 191, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(247, 241, 255)",
      level2: "rgb(242, 234, 255)",
      level3: "rgb(237, 228, 255)",
      level4: "rgb(235, 226, 255)",
      level5: "rgb(232, 222, 255)",
    },
    surfaceDisabled: "rgba(28, 27, 31, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 31, 0.38)",
    backdrop: "rgba(49, 47, 56, 0.4)",
  },
};
