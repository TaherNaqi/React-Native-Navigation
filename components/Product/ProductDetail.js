import { StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { baseURL } from "../../stores/api";
import AddIcon from "react-native-vector-icons/Fontisto";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { HStack, useToast } from "native-base";
const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();
  const product = route.params.product;
  const handleAdd = () => {
    const newItem = {
      product: product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
    toast.show({
      title: `${newItem.product.name} has been added`,
      status: "success",
    });
  };
  return (
    <SafeAreaView space={2} style={styles.cartDisplay}>
      <Image
        source={{ uri: baseURL + product.image }}
        style={styles.productImage}
      />
      <HStack space={2} style={styles.cartDisplay}>
        <Text>add {product.name} to your cart</Text>
        <NumericInput
          minValue={1}
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
        />
        <AddIcon
          name="shopping-basket-add"
          onPress={handleAdd}
          style={styles.addBtn}
        />
      </HStack>
      {/* {types} */}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productImage: {
    height: 250,
    width: "75%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "orange",
    borderRadius: 25,
  },
  addBtn: { fontSize: 23, color: "orange" },
  cartDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
});
