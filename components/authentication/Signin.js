import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "native-base";
import authStore from "../../stores/authStore";
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const handleUserName = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };
  const handleLogIn = () => {
    authStore.signIn(user);
    if (user) navigation.navigate("Home");
  };
  console.log(user);
  return (
    <View>
      <TextInput
        mode="outlined"
        outlineColor="orange"
        activeOutlineColor="orange"
        label="Username"
        placeholder="Username"
        style={styles.adjustMxUser}
        onChangeText={handleUserName}
      />
      <TextInput
        mode="outlined"
        outlineColor="orange"
        activeOutlineColor="orange"
        secureTextEntry
        label="Password"
        placeholder="Password"
        onChangeText={handlePassword}
      />
      <Button onPress={handleLogIn} style={styles.btnColor}>
        <Text style={styles.textColor}>Log in</Text>
      </Button>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  adjustMxUser: { marginTop: 10, marginBottom: 5 },
  btnColor: {
    backgroundColor: "orange",
    width: "40%",
    alignSelf: "center",
    marginTop: 10,
  },
  textColor: { color: "black" },
});
