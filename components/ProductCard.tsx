import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Chip,
  List,
  Text,
  useTheme,
} from "react-native-paper";
import { ProductCardProps } from "../types/types";

const LeftContent = (props: { size: number }) => (
  <Avatar.Icon {...props} icon="folder" />
);

const ProductCard = ({
  item,
  index,
  setSelectedIndex,
  setIsModalVisible,
}: ProductCardProps) => {
  return (
    <Card
      mode="contained"
      style={{ marginBottom: 16 }}
      onPress={() => {
        setSelectedIndex(index);
        setIsModalVisible(true);
      }}
    >
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
            <Text style={{ fontSize: 16, marginRight: 4, fontWeight: "bold" }}>
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
          style={{ fontWeight: "300" }}
          numberOfLines={3}
        >
          {item.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
