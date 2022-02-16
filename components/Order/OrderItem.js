import { StyleSheet } from "react-native";
import React from "react";
import ProductItem from "../Product/ProductItem";
import { VStack } from "native-base";
const OrderItem = ({ order }) => {
  const products = order.products.map((product) => (
    <ProductItem product={product.product} />
  ));
  return (
    <VStack w="100%" alignItems="center" space="3">
      {products}
    </VStack>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
