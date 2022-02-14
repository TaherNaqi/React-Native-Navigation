import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Button } from "native-base";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeMiddle}>
      <Text style={styles.title}>Welcome to Shops</Text>
      <Button style={styles.btnSm} onPress={() => navigation.navigate("Shops")}>
        Explore Shops
      </Button>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: { color: "#000", fontSize: 38, textAlign: "center" },
  btnSm: { width: "35%", alignSelf: "center" },
  homeMiddle: { flex: 1, alignItems: "center", justifyContent: "center" },
});
