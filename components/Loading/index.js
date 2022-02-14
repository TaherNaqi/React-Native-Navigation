import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Spinner } from "native-base";

const Loading = () => {
  return (
    <SafeAreaView>
      <Spinner />
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({});
