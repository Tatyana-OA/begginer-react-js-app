import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingBottom: 20,
  },
  titleStyle: {
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: 700,
  },
});

export default ColorCounter;
