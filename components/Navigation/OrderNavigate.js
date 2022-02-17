import React from "react";
import OrderList from "../Order/OrderList";

import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from "../Product/ProductDetail";

const OrderNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Order"
        component={OrderList}
        options={{
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
