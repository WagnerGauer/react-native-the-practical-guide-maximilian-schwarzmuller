import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
