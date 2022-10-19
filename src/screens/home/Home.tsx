import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "../../params";
import HomeLanding from "./stacks/HomeLanding";
import Chapters from "./stacks/Chapters";
import StartTest from "./stacks/StartTest";
import Maths from "./stacks/Maths";
import Chemistry from "./stacks/Chemistry";
import Physics from "./stacks/Physics";
import SeeGrades from "./stacks/SeeGrades";
import Quiz from "./stacks/Quiz";
import Tests from "./stacks/Tests";
import Exams from "./stacks/Exams";

const Stack = createStackNavigator<HomeStackParamList>();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName="HomeLanding" screenOptions={{}}>
      <Stack.Screen name="HomeLanding" component={HomeLanding} />
      <Stack.Screen name="Chapters" component={Chapters} />
      <Stack.Screen name="StartTest" component={StartTest} />
      <Stack.Screen name="SeeGrades" component={SeeGrades} />
      <Stack.Screen name="Maths" component={Maths} />
      <Stack.Screen name="Chemistry" component={Chemistry} />
      <Stack.Screen name="Physics" component={Physics} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Tests" component={Tests} />
      <Stack.Screen name="Exams" component={Exams} />
    </Stack.Navigator>
  );
};

export default Home;
