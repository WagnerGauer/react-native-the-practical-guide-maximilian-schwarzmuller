import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryComponent from "../components/CategoryComponent";

const HomeScreen = () => {
  console.log(CATEGORIES);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Choose a Category!</Text>
      <FlatList
        style={styles.listContainer}
        keyExtractor={(category) => category.id}
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryComponent category={item} />}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

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
