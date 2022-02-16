import { StyleSheet, Text, View } from "react-native";
import React from "react";
import orderStore from "../../stores/orderStore";
import { observer } from "mobx-react";
import { VStack, Center } from "native-base";
import OrderItem from "./OrderItem";
const OrderList = () => {
  const orderList = orderStore.orders.map((order) => (
    <OrderItem key={order._id} order={order} />
  ));
  return (
    <Center flex={1} px="3">
      <VStack space="5">{orderList}</VStack>
    </Center>
  );
};

export default observer(OrderList);

const styles = StyleSheet.create({});
