import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealItem = ({ mealItem }) => {
  console.log(mealItem);
  return <View>{<Text> {mealItem.title}</Text>}</View>;
};

export default MealItem;

const styles = StyleSheet.create({});
