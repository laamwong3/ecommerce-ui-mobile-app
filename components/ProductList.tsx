import { StyleSheet, View } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  Divider,
  Modal,
  Portal,
  Snackbar,
  Switch,
  Text,
  useTheme,
} from "react-native-paper";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import { useColorMode } from "../contexts/ColorMode";
import { getAllProducts } from "../services/getAllProducts";
import { ProductCardProps, Products } from "../types/types";
import ProductCard from "./ProductCard";
import DetailsCard from "./DetailsCard";

const ProductList = () => {
  const { isDarkMode, setIsDarkMode } = useColorMode();
  const [products, setProducts] = useState<Products[]>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => setIsModalVisible(true);
  // const hideModal = () => setIsModalVisible(false);

  const theme = useTheme();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["90%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    getAllProducts().then((items) => setProducts(items));
  }, []);
  return (
    <BottomSheetModalProvider>
      <View style={{ ...styles.container }}>
        <View style={{ ...styles.header }}>
          <Text variant="headlineLarge">Feature Products</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
          />
          {/* <Button onPress={showModal}>show</Button> */}
          {/* <Button onPress={handlePresentModalPress}>show</Button> */}
        </View>
        <Divider style={{ ...styles.divider }} />
        <FlashList
          data={products}
          estimatedItemSize={200}
          // numColumns={2}
          renderItem={({ item, index }) => {
            const productCardProps: ProductCardProps = {
              item,
              index,
              setSelectedIndex,
              bottomSheetModalRef,
              // handlePresentModalPress,
              // setIsModalVisible,
            };
            return <ProductCard {...productCardProps} />;
          }}
          // keyExtractor={}
        />

        <BottomSheetModal
          containerStyle={{ backgroundColor: theme.colors.backdrop }}
          backgroundStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            {products ? <DetailsCard item={products[selectedIndex]} /> : null}
          </View>
        </BottomSheetModal>
        {/* <Portal>
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
      </Portal> */}
      </View>
    </BottomSheetModalProvider>
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
  contentContainer: {
    flex: 1,
    // padding: 16,
  },
});
