import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Tatyana!";

  return (
    <View>
      <Text style={styles.text}>Getting started</Text>
      <Text style={styles.subtext}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "purple",
    fontStyle: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
  subtext: {
    fontSize: 30,
    color: "blue",
  },
  description: {
    fontSize: 20,
    color: "green",
  },
});

export default ComponentsScreen;
