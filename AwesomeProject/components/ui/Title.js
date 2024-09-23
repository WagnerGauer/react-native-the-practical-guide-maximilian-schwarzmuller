import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
const Title = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const marginTopDistance = height < 400 ? 80 : 100;
  return (
    <Text style={[styles.title, { marginTop: marginTopDistance }]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 80,
    color: "white",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    maxWidth: "80%",
  },
});
