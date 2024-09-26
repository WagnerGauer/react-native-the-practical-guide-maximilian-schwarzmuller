import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";
import React from "react";

const MealsList = ({ displayedMeals }) => {
  function renderMealItem({ item }) {
    const { id, title, imageUrl, affordability, complexity, duration } = item;

    const mealItemProps = {
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
      id,
    };

    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
