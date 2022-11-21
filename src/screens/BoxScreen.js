import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyleOne}>Box Screen 1</Text>
      <Text style={styles.textStyleTwo}>Box Screen 2</Text>
      <Text style={styles.textStyleThree}>Box Screen 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyleOne: {
    borderWidth: 3,
    borderColor: "red",
    marginTop: 3,
  },
  textStyleTwo: {
    borderWidth: 3,
    borderColor: "red",
    marginTop: 3,
    backgroundColor: "green",
    //child to fill up the whole parent
    ...StyleSheet.absoluteFillObject,
  },
  textStyleThree: {
    borderWidth: 3,
    borderColor: "red",
    marginTop: 3,
  },
});

export default BoxScreen;
