import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const textVariable = "Super strong!";
  const componentVariable = (
    <Text style={styles.description}>
      Smashing things and villains before it was cool
    </Text>
  );
  return (
    <>
      {/* Different ways to apply styles to Text */}
      <Text style={styles.text}>The Hulk</Text>
      <Text style={styles.subtext}>{textVariable}</Text>
      <Text>{componentVariable}</Text>
    </>
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
