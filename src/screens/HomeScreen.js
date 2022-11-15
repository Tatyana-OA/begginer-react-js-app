import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello, Darkness, my old friend.</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log("Click");
        }}
      />
      <TouchableOpacity onPress={() => console.log("Press touchable opacity")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
