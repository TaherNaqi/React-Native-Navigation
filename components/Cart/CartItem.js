import { StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import { baseURL } from "../../stores/api";
import AddIcon from "react-native-vector-icons/Fontisto";
import TrashIcon from "react-native-vector-icons/FontAwesome";
import { Avatar, Button, Center, VStack } from "native-base";
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
      <VStack style={{ flex: 1 }}>
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
      {/* <Button style={styles.addBtn} onPress={handleAdd}>
        <Text>Add</Text>
      </Button> */}
      <AddIcon
        name="shopping-basket-add"
        onPress={handleAdd}
        style={styles.addBtn}
      />
      <TrashIcon
        name="trash-o"
        onPress={() => cartStore.removeItemFromCart(item.product._id)}
        style={styles.delete}
      />
      {/* <Button
        style={styles.addBtn}
        onPress={() => cartStore.removeItemFromCart(product._id)}
      >
        <Text>Delete</Text>
      </Button> */}
    </HStack>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({
  cartDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
  itemName: { fontWeight: "bold", fontSize: 15 },
  cartImage: { width: "20%", height: "100%" },
  addBtn: { fontSize: 23, color: "orange" },
  delete: { fontSize: 23, color: "red" },
});
