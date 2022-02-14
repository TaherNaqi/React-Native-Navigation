import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.listMargin}>
      <Text style={styles.alignMiddle}>{product.name}</Text>
      <Image
        source={{ uri: baseURL + product.image }}
        style={styles.productImg}
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productImg: { height: 100, width: 100 },
  alignMiddle: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  listMargin: { marginRight: 10 },
});
