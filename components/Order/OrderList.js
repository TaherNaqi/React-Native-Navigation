import { StyleSheet } from "react-native";
import React from "react";
import orderStore from "../../stores/orderStore";
import { observer } from "mobx-react";
import { VStack } from "native-base";
import OrderItem from "./OrderItem";
const OrderList = () => {
  const orderList = orderStore.orders.map((order) => (
    <OrderItem key={order._id} order={order.order} />
  ));
  return <VStack space="5">{orderList}</VStack>;
};

export default observer(OrderList);

const styles = StyleSheet.create({});
