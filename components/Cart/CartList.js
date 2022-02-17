import { StyleSheet, View, Text } from "react-native";
import { Button, VStack } from "native-base";
import React from "react";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View style={styles.cartListWrapper}>
      <VStack space={3} alignItems="center">
        {cartList}
      </VStack>
      {cartStore.items.length > 0 && (
        <>
          {authStore.user ? (
            <Button onPress={cartStore.checkout} style={styles.btnSm}>
              <Text style={styles.btnTxt}>Checkout</Text>
            </Button>
          ) : (
            <Button
              onPress={() => navigation.navigate("Signin")}
              style={styles.btnSm}
            >
              <Text style={styles.btnTxt}>Sign in to Checkout</Text>
            </Button>
          )}

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
    width: "45%",
    alignSelf: "center",
    backgroundColor: "orange",
    margin: 25,
  },
  btnTxt: { color: "black" },
});
