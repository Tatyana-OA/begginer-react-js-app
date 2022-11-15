import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const textVariable = "Hello, Light!";
  const componentVariable = <Text style={{ color: "green" }}>Hulk</Text>;
  return (
    <>
      {/* Different ways to apply styles to Text */}
      <Text style={styles.text}>
        New Component says: Hello, Darkness, my old friend.
      </Text>
      <Text>{textVariable}</Text>
      <Text>{componentVariable}</Text>
    </>
  );
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
