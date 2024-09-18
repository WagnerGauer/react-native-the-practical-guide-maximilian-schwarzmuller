import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalInput) {
    setGoals([...goals, { text: goalInput, id: Math.random() }]);
  }

  console.log(goals);

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={(goalInput) => addGoalHandler(goalInput)} />

      <View style={styles.goalsCotainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsCotainer: {
    flex: 5,
  },
});
