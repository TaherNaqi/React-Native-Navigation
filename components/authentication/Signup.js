import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  useToast,
  VStack,
} from "native-base";
import authStore from "../../stores/authStore";
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const toast = useToast();
  const handleUserName = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };
  const handleSignUp = () => {
    authStore.signUp(user, navigation, toast);
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Sign up
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={handleUserName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={handlePassword} />
          </FormControl>
          <Button mt="2" style={styles.btnColor} onPress={handleSignUp}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({
  adjustMxUser: { marginTop: 10, marginBottom: 5 },
  btnColor: {
    backgroundColor: "orange",
  },
  textColor: { color: "black" },
});
