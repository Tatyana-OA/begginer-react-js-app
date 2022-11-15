import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 25 },
    { name: "Friend 2", age: 27 },
    { name: "Friend 3", age: 35 },
    { name: "Friend 4", age: 40 },
    { name: "Friend 5", age: 20 },
    { name: "Friend 6", age: 18 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name} // use Name property as key
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text key={index} styles={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
