import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ item, removeGoal }) {
  return (
    <Pressable onPress={() => removeGoal(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
