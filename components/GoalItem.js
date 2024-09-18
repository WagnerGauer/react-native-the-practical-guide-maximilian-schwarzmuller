import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React from "react";

export default function GoalItem({ item, removeGoal, visible }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // Android has a special effects that are ready for me to use
        android_ripple={{ color: "dddddd" }}
        onPress={() => removeGoal(item.id)}
        // In case I want a special effect I have to do it manually for IOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "white",
    padding: 8,
    alignSelf: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
