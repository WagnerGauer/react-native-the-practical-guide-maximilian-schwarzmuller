import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
const Title = ({ children, extraStyles }) => {
  const { width, height } = useWindowDimensions();

  console.log(extraStyles);

  const marginTopDistance = height < 400 ? 80 : 100;
  return (
    <Text style={[styles.title, { marginTop: marginTopDistance }, extraStyles]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 80,
    color: "white",
    padding: 12,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    maxWidth: "80%",
  },
});
