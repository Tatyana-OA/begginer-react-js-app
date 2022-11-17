import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image, score }) => {
  return (
    <View style={styles.viewStyle}>
      <Image source={image} style={styles.imgStyle} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    flexDirection: "column",
  },
  imgStyle: { width: 200, height: 200, paddingBottom: 10 },
});

export default ImageDetail;
