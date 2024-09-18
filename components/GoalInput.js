import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onCancel} color="#f31282" title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button onPress={handlePress} color="#5e0acc" title="Add Goal" />
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
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
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
