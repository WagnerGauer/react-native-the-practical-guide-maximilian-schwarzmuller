import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;
  console.log(categoryTitle);

  // useLayoutEffet is the same as useEffect but it garanties that in this case the title
  // doesn't load after the component is rendered
  useLayoutEffect(() => {
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem({ item }) {
    const { title, imageUrl, affordability, complexity, duration } = item;

    const mealItemProps = {
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
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

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
