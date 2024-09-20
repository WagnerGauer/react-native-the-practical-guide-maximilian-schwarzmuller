import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

const GameScreen = ({ targetNumber }) => {
  const [guess, setGuess] = useState(50);
  const [lowestGuess, setLowestGuess] = useState(50);
  const [highestGuess, setHighestGuess] = useState(99);
  const [tries, setTries] = useState(1);

  function handleHigher() {
    setLowestGuess(guess);
    const newGuess = guess + Math.floor((highestGuess - guess) / 2);

    setTries(tries + 1);
    setGuess(newGuess);
  }
  function handleLower() {
    setHighestGuess(guess);
    const newGuess = guess - Math.floor((guess - lowestGuess) / 2);

    setTries((oldTries) => [...oldTries]);

    setGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <Text>Higer or Lower?</Text>
        <PrimaryButton onPress={handleLower}>Lower</PrimaryButton>
        <PrimaryButton onPress={handleHigher}>Higher</PrimaryButton>
      </View>
      <FlatList data={tries} />
      {guess === 63 ? <Text>You Got it!</Text> : null}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
