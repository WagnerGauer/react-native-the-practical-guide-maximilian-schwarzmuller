import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoal }) => {
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandler(input) {
    setGoalInput(input);
    console.log(input);
  }

  function handlePress() {
    if (goalInput === "") return;
    addGoal(goalInput);
    setGoalInput("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={goalInput}
      />
      <Button onPress={handlePress} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
