import { StyleSheet, Text, View } from "react-native";
import React from "react";
import items from "../../items";
import CartItem from "./CartItem";
const CartList = () => {
  const cartList = items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return <View>{cartList}</View>;
};

export default CartList;

const styles = StyleSheet.create({});
