import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello, Darkness, my old friend.</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
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
