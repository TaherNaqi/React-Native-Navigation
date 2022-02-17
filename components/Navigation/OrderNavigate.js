import React from "react";
import OrderList from "../Order/OrderList";
import CartButton from "../Cart/CartButton";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from "../Product/ProductDetail";

const OrderNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
          // headerTintColor: "white",
        },
      }}
    >
      <Screen
        name="Order"
        component={OrderList}
        options={{
          headerRight: () => <CartButton />,
          title: "Orders",
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
    </Navigator>
  );
};

export default OrderNavigator;
