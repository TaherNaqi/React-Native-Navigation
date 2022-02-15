import { StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import { baseURL } from "../../stores/api";
import { Avatar, Button, VStack } from "native-base";
import { HStack } from "native-base";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  console.log(
    "🚀 ~ file: CartItem.js ~ line 11 ~ CartItem ~ quantity",
    quantity
  );
  // const product = cartStore.items.find((i) => i._id === item._id);
  // setQuantity(product.quantity);
  const handleAdd = () => {
    const newItem = {
      product: item.product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
  };
  return (
    <HStack space={2} style={styles.cartDisplay}>
      <Avatar source={{ uri: item.product.image }} style={styles.cartImage} />
      <VStack>
        <Text style={styles.itemName}>{item.product.name}</Text>
        <Text>Price {item.product.price}KD</Text>
      </VStack>
      <NumericInput
        rounded
        value={quantity}
        onChange={(value) => setQuantity(value)}
        totalHeight={30}
        totalWidth={60}
      />
      <Button style={styles.addBtn} onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
      <Button
        style={styles.addBtn}
        onPress={() => cartStore.removeItemFromCart(product._id)}
      >
        <Text>Delete</Text>
      </Button>
    </HStack>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({
  cartDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  itemName: { fontWeight: "bold", fontSize: 15 },
  cartImage: { width: "20%", height: "100%" },
  addBtn: { backgroundColor: "orange" },
});
