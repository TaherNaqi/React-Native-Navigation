import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      {authStore.user && (
        <>
          <Icon
            size={25}
            style={styles.Profile}
            name="cart"
            onPress={() => navigation.navigate("CartList")}
          />
        </>
      )}
    </>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  Profile: {
    color: "black",
    marginRight: 10,
  },
});
