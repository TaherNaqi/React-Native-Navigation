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
    <View style={styles.cartListWrapper}>
      <VStack space={3} alignItems="center">
        {cartList}
      </VStack>
      {cartStore.items !== [] && (
        <>
          <Button onPress={cartStore.checkout} style={styles.btnSm}>
            <Text style={styles.btnTxt}>Checkout</Text>
          </Button>
          {/* <Text>{cartStore.totalPrice}</Text> */}
        </>
      )}
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({
  cartListWrapper: { marginTop: 20 },
  btnSm: {
    width: "35%",
    alignSelf: "center",
    backgroundColor: "orange",
    margin: 25,
  },
  btnTxt: { color: "black" },
});
