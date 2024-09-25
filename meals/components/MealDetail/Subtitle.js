import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#b68163",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#b68163",
  },
});
