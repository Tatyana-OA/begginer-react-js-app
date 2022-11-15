import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  return (
    <>
      <Text style={styles.text}>Well, this sucks.</Text>
      <ComponentsScreen />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
