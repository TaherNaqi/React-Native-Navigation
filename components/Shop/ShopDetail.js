import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import shopStore from "../../stores/shopStore";
import { observer } from "mobx-react";
import ProductList from "../Product/ProductList";
import Loading from "../Loading";
import { baseURL } from "../../stores/api";
const ShopDetail = ({ route }) => {
  if (shopStore.loading) return <Loading />;
  const shop = route.params.shop;
  const types = shop.type.map((_type) => (_type) => (
    <Text key={_type}>{_type}</Text>
  ));
  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to {shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.shopImage} />
      {types}
      <ProductList products={shop.products} />
    </SafeAreaView>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  shopImage: {
    height: 250,
    width: "75%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "orange",
    borderRadius: 25,
  },
});
