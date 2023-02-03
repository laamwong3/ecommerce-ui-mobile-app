import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Chip,
  IconButton,
  List,
  Portal,
  Snackbar,
  Text,
  useTheme,
} from "react-native-paper";
import { DetailsCardProps, ProductCardProps } from "../types/types";

const DetailsCard = ({ item }: DetailsCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const theme = useTheme();

  const handleMinusQuantity = () => {
    if (quantity === 1) {
      setIsSnackbarVisible(true);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <>
      <Portal>
        <Snackbar
          visible={isSnackbarVisible}
          onDismiss={() => setIsSnackbarVisible(false)}
          duration={5000}
          action={{
            label: "close",
            onPress: () => setIsSnackbarVisible(false),
          }}
        >
          Quantity cannot be less than 1
        </Snackbar>
      </Portal>
      <Card
        mode="contained"
        style={{ marginBottom: 16 }}
        //   onPress={() => setSelectedIndex(index)}
      >
        {/* <Image
        source={{ uri: item.image }}
        style={{
          resizeMode: "cover",
          //   width: "100%",
          height: "60%",
          margin: 16,
          borderRadius: 16,
        }}
      /> */}
        <Card.Cover
          source={{ uri: item.image }}
          style={{ margin: 16, height: 300 }}
        />
        <Card.Content>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Chip mode="outlined" compact elevated>
              {item.category}
            </Chip>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar.Icon icon={"star"} size={24} style={{ marginRight: 4 }} />
              <Text
                style={{ fontSize: 16, marginRight: 4, fontWeight: "bold" }}
              >
                {item.rating.rate}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "200" }}>
                ({item.rating.count} reviews)
              </Text>
            </View>
          </View>
          <Text
            variant="titleLarge"
            style={{ fontWeight: "900", marginBottom: 8 }}
          >
            {item.title}
          </Text>
          <Text
            variant="bodyMedium"
            style={{ fontWeight: "300", marginBottom: 8 }}
            numberOfLines={3}
          >
            {item.description}
          </Text>
          <View style={{ ...styles.selectQuantity, marginBottom: 8 }}>
            <View style={{ ...styles.control }}>
              <TouchableOpacity onPress={handleMinusQuantity}>
                <IconButton icon={"minus-circle-outline"} size={32} />
              </TouchableOpacity>
              <Text style={{ fontSize: 24, marginHorizontal: 8 }}>
                {quantity}
              </Text>
              <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
                <IconButton icon={"plus-circle-outline"} size={32} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "900",
                color: theme.colors.tertiary,
              }}
            >
              ${(item.price * quantity).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity>
            <Button
              style={{ width: "100%", marginBottom: 8 }}
              mode={"contained"}
            >
              Add to cart
            </Button>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  selectQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  control: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DetailsCard;
