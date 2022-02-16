import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import cartStore from "../../stores/cartStore";
import Icon from "react-native-vector-icons/Ionicons";
import { HStack, VStack } from "native-base";
const ProductItem = ({ product }) => {
  console.log(
    "🚀 ~ file: ProductItem.js ~ line 7 ~ ProductItem ~ product",
    product
  );
  const handleAdd = () => {
    const newItem = {
      product: product,
      quantity: product.quantity,
    };
    cartStore.addItemToCart(newItem);
  };
  return (
    <VStack style={styles.listMargin}>
      <Text style={styles.alignMiddle}>{product.name}</Text>
      <Image
        source={{ uri: baseURL + product.image }}
        style={styles.productImg}
      />
      <HStack alignItems="center">
        <Pressable onPress={handleAdd}>
          <Icon size={25} style={styles.addButton} name="add" />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productImg: { height: 100, width: 100, borderRadius: 25 },
  alignMiddle: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  listMargin: { marginRight: 20 },
  addButton: { marginLeft: 35 },
});
