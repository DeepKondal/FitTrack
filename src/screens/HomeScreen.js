import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import AccelerometerDataScreen from "./AccelerometerDataScreen";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hello</Text>
    <AccelerometerDataScreen/>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
