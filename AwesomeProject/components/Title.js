import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/color";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 100,
    color: Colors.accent500,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.accent500,
  },
});
