import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import CartList from "../Cart/CartList";
const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "orange", headerTintColor: "white" },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Shops" component={ShopList} />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({ title: route.params.shop.name })}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default StackNavigator;
