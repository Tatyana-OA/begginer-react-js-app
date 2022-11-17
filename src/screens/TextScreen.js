import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  return (
    <View>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        onBlur={() =>
          name.length > 3 && name.length < 50 ? setError(false) : setError(true)
        }
      />
      {!error ? (
        <Text style={styles.text}>You've just entered: {name}</Text>
      ) : (
        <Text>Please enter a name that is between 3 and 50 characters.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
  },
  text: {
    marginLeft: 15,
  },
});

export default TextScreen;
