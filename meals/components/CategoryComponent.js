import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryComponent = ({ category, onPress }) => {
  return (
    <View
      style={[styles.categoryComponent, { backgroundColor: category.color }]}
    >
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  categoryComponent: {
    height: 150,
    flex: 1,
    flexDirection: "column",
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
