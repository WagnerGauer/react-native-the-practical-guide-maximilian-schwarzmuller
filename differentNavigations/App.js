import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#b8b7f1",
          drawerActiveTintColor: "#3c3b86",
          // drawerStyle: { backgroundColor: "#dbdbdb" },
          headerStyle: { backgroundColor: "#3c3b86" },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Wellcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Wecome Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={18} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
