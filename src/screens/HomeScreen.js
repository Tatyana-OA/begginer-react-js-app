import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <Text style={styles.text}>Well, this sucks.</Text>
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
