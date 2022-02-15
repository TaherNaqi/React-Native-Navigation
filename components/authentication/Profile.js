import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      {authStore.user && (
        <>
          <Badge
            bg="red.400"
            colorScheme="danger"
            rounded="999px"
            mb={-2}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}
          >
            {cartStore.totalQuantity}
          </Badge>
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
