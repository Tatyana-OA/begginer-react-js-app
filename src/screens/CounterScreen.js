import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { state, counter: state.counter + 1 };
    case "DECREASE":
      return { state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "INCREASE" })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "DECREASE" })} />
      <Text>Current count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;
