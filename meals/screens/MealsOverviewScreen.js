import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
