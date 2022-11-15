import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.text}>Hello, Darkness, my old friend.</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "purple",
    fontStyle: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
});

export default ComponentsScreen;
