import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";

const MealDetail = ({ route }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return <View>{<Text>{meal.title}</Text>}</View>;
};

export default MealDetail;

const styles = StyleSheet.create({});
