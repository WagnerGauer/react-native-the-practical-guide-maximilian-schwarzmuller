import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React, { useTransition } from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryComponent from "../components/CategoryComponent";

const MealsCategories = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryComponent onPress={pressHandler} category={itemData.item} />
    );
  }

  console.log(CATEGORIES);
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.listContainer}
        keyExtractor={(category) => category.id}
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default MealsCategories;

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 34,
    color: "white",
  },
  screen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width * 0.9,
  },
});
