import React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem";
const ShopList = ({ navigation }) => {
  const shops = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));
  return <View>{shops}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
