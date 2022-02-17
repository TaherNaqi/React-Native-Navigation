import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeNavigator from "./HomeNavigator";
import OrderNavigator from "./OrderNavigate";
import CartButton from "../Cart/CartButton";

const TabNavigator = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <CartButton />,

        // headerShown: false,
        tabBarStyle: {
          tabBarBackgroundColor: "#fff",
          tabBarButtonColor: "#ffff",
          tabBarSelectedButtonColor: "orange",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          onPress: () => navigation.navigate("Home"),

          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Orders",
          onPress: () => navigation.navigate("Order"),

          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
