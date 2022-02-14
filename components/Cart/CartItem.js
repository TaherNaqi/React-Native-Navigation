import { StyleSheet } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";
import { Center, Heading, VStack } from "native-base";

const CartItem = ({ item }) => {
  return (
    // <View>
    //   <Text>{product.name}</Text>
    //   <Image source={{ uri: product.image }} style={styles.cartImage} />
    //   <Text>{product.price}</Text>

    //   <Text>{product.quantity}</Text>
    // </View>
    <VStack space={4} alignItems="center">
      <Heading>{item.product.name}</Heading>

      <Center
        size={16}
        bg="primary.400"
        rounded="md"
        _text={{
          color: "white",
        }}
        shadow={3}
      >
        {item.quantity}
      </Center>
    </VStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartImage: {
    width: 100,
    height: 100,
  },
});
