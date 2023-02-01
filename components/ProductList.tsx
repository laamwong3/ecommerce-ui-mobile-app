import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Modal,
  Portal,
  Switch,
  Text,
  useTheme,
} from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { useColorMode } from "../contexts/ColorMode";
import { getAllProducts } from "../services/getAllProducts";
import { Products } from "../types/types";
import ProductCard from "./ProductCard";
import DetailsCard from "./DetailsCard";

const ProductList = () => {
  const { isDarkMode, setIsDarkMode } = useColorMode();
  const [products, setProducts] = useState<Products[]>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const theme = useTheme();

  useEffect(() => {
    getAllProducts().then((items) => setProducts(items));
  }, []);
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header }}>
        <Text variant="headlineLarge">Feature Products</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
        <Button onPress={showModal}>show</Button>
      </View>
      <Divider style={{ ...styles.divider }} />
      <FlashList
        data={products}
        estimatedItemSize={200}
        renderItem={({ item, index }) => {
          const productCardProps = {
            item,
            index,
            setSelectedIndex,
            setIsModalVisible,
          };
          return <ProductCard {...productCardProps} />;
        }}
        // keyExtractor={}
      />
      <Portal>
        <Modal
          style={{ justifyContent: "flex-end" }}
          visible={isModalVisible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 16,
          }}
        >
          {products ? <DetailsCard item={products[selectedIndex]} /> : null}
        </Modal>
      </Portal>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    marginVertical: 16,
  },
});
