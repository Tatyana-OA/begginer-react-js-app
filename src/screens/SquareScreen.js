import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        }
        return setRed(red + change);
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        }
        return setGreen(green + change);
      case "blue":
        if (blue + change > 255 || blue + change < 0) {
          return;
        }
        return setBlue(blue + change);

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          setColor("red", 5);
        }}
        onDecrease={() => {
          setColor("red", -5);
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor("green", +5);
        }}
        onDecrease={() => {
          setColor("green", -5);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor("blue", +5);
        }}
        onDecrease={() => {
          setColor("blue", -5);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
