import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
    color: "#ddb52f",
    padding: 12,
    borderWidth: 2,
    borderColor: "#ddb52f",
  },
});
