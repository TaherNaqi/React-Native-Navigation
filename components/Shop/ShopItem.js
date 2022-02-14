import React from "react";
import { StyleSheet, Text, Image, Pressable } from "react-native";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/api";
const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
    >
      <Text style={styles.title}>{shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.shopImage} />
    </Pressable>
  );
};

export default observer(ShopItem);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
  },
  shopImage: {
    height: 150,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
});
