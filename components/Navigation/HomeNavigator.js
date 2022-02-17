import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import CartList from "../Cart/CartList";
import CartButton from "../Cart/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import OrderList from "../Order/OrderList";
import ProductDetail from "../Product/ProductDetail";
const HomeNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen name="Shops" component={ShopList} />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({ title: route.params.shop.name })}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default HomeNavigator;
