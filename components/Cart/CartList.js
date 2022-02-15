import { StyleSheet, View, Text } from "react-native";
import { Button, VStack } from "native-base";
import React from "react";
import items from "../../items";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      <VStack space={2} alignItems="center">
        {cartList}
      </VStack>
      <Button style={styles.btnSm}>
        <Text style={styles.btnTxt}>Checkout</Text>
      </Button>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({
  btnSm: {
    width: "35%",
    alignSelf: "center",
    backgroundColor: "orange",
  },
  btnTxt: { color: "black" },
});
