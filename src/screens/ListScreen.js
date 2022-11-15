import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
    { name: "Friend 6" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name} // use Name property as key
      horizontal // makes flatlist horizontal
      showsHorizontalScrollIndicator={false} // overflow hidden
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text key={index} styles={styles.textStyle}>
            {item.name}
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
