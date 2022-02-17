import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  useToast,
  VStack,
} from "native-base";
import Icon from "react-native-vector-icons/Feather";
import authStore from "../../stores/authStore";
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const handleUserName = (value) => {
    setUser({ ...user, username: value });
  };
  const handlePassword = (value) => {
    setUser({ ...user, password: value });
  };
  const handleLogIn = () => {
    authStore.signIn(user, navigation, toast);
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Sign in
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={handleUserName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              onChangeText={handlePassword}
              InputRightElement={
                <Icon
                  style={styles.marginEye}
                  size={20}
                  name={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
          </FormControl>
          <Button mt="2" style={styles.btnColor} onPress={handleLogIn}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({
  adjustMxUser: { marginTop: 10, marginBottom: 5 },
  btnColor: {
    backgroundColor: "orange",
  },
  textColor: { color: "black" },
  marginEye: { marginRight: 5 },
});
