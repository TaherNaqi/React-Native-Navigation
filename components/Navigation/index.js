import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
