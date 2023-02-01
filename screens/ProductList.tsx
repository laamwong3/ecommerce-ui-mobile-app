import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Switch, Text } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { useColorMode } from "../contexts/ColorMode";
import { getAllProducts } from "../services/getAllProducts";
import { Products } from "../types/services";

const ProductList = () => {
  const { isDarkMode, setIsDarkMode } = useColorMode();
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getAllProducts().then((items) => setProducts(items));
  }, []);
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header }}>
        <Text>{products[0].description}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
      {/* <FlashList /> */}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
});
