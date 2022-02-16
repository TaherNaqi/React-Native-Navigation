import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "native-base";
import authStore from "../../stores/authStore";
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleUserName = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };
  const handleSignUp = () => {
    authStore.signUp(user);
  };
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
      <Button onPress={handleSignUp} style={styles.btnColor}>
        <Text style={styles.textColor}>Sign up</Text>
      </Button>
    </View>
  );
};

export default Signup;

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
