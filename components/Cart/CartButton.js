import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <Badge
        bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Icon
        size={25}
        style={styles.cartButton}
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({
  cartButton: {
    color: "black",
    marginRight: 10,
  },
});
