import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import GpaCalculator from "./screens/gpaCalculator";
import CoursePlanner from "./screens/coursePlanner";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            { title: "Course Manager" },
            { title: "Course Planner" }
          }
        />
        <Stack.Screen name="GpaCalculator" component={GpaCalculator} options={{ title: "GPA Calculator" }} />
        <Stack.Screen name="CoursePlanner" component={CoursePlanner} options={{ title: "Course Planner" }} />
      </Stack.Navigator>
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
