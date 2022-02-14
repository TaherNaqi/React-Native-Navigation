import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  return (
    <View>
      <Text style={styles.title}>ProductList</Text>
      <View style={styles.container}>{productList}</View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
