import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Button,
  MD3DarkTheme,
  Provider,
  Switch,
  useTheme,
} from "react-native-paper";
import ColorMode, { useColorMode } from "./contexts/ColorMode";
import ProductList from "./screens/ProductList";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

function App() {
  const { isDarkMode, setIsDarkMode } = useColorMode();
  return (
    <Provider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: isDarkMode
            ? darkTheme.colors?.background
            : lightTheme.colors?.background,
        }}
      >
        <ProductList />
        <StatusBar style={isDarkMode ? "light" : "dark"} />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <ColorMode>
      <App />
    </ColorMode>
  );
};
