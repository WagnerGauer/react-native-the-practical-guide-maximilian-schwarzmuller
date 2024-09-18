import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalisVisible] = useState(false);

  function startAddGoalHandler() {
    setModalisVisible(true);
  }

  function endAddGoalHandler() {
    setModalisVisible(false);
  }

  function addGoalHandler(goalInput) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: goalInput, id: Math.random() },
    ]);
    endAddGoalHandler();
  }

  function removeGoalHandler(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  console.log(goals);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={startAddGoalHandler}
          color="#5e08cc"
          title="Add New Goal"
        />

        <GoalInput
          visible={modalIsVisible}
          addGoal={(goalInput) => addGoalHandler(goalInput)}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsCotainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  removeGoal={(id) => removeGoalHandler(id)}
                  item={itemData.item}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
