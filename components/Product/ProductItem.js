import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
const ProductItem = ({ product }) => {
  const navigation = useNavigation();

  return (
    <VStack style={styles.listMargin}>
      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetail", { product: product })
        }
      >
        <Text style={styles.alignMiddle}>{product.name}</Text>
        <Image
          source={{ uri: baseURL + product.image }}
          style={styles.productImg}
        />
      </Pressable>
    </VStack>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productImg: { height: 100, width: 100, borderRadius: 25 },
  alignMiddle: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  listMargin: { marginRight: 20 },
  addButton: { marginLeft: 35 },
});
