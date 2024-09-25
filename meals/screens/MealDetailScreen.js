import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({ route }) => {
  const mealItem = route.params.mealItem;
  return (
    <View>
      <Text>MealDetail</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({});
