import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    alignItems: "center",
  },
  goalText: {
    color: "white",
  },
});
