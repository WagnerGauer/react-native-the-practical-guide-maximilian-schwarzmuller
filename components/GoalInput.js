import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoal, visible, onCancel }) => {
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handlePress} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
