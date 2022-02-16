import { StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import { baseURL } from "../../stores/api";
import AddIcon from "react-native-vector-icons/Fontisto";
import TrashIcon from "react-native-vector-icons/FontAwesome";
import { Avatar, VStack, HStack, useToast } from "native-base";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const toast = useToast();
  const handleAdd = () => {
    const newItem = {
      product: item.product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
    toast.show({
      title: `${newItem.product.name} has been added`,
      status: "success",
    });
    // setQuantity(1);
  };
  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
    toast.show({
      title: `${item.product.name} has been deleted`,
      status: "error",
    });
  };
  return (
    <HStack space={2} style={styles.cartDisplay}>
      <Avatar
        source={{ uri: baseURL + item.product.image }}
        style={styles.cartImage}
      />
      <VStack style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.product.name}</Text>
        <Text>Price {item.product.price}KD</Text>
      </VStack>
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
      <TrashIcon name="trash-o" onPress={handleDelete} style={styles.delete} />
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
