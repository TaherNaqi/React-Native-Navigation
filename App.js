import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "./components/Navigation/StackNavigator";
import TabNavigator from "./components/Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  appTheme: {
    backgroundColor: "cyan",
    width: "100%",
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
