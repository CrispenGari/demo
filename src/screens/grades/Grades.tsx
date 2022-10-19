import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GradesStackParamList } from "../../params";
import GradesLanding from "./stacks/GradesLanding";
import GradesMaths from "./stacks/GradesMaths";
import GradesChemistry from "./stacks/GradesChemistry";
import GradesPhysics from "./stacks/GradesPhysics";
const Stack = createStackNavigator<GradesStackParamList>();
const Grades = () => {
  return (
    <Stack.Navigator initialRouteName="GradesLanding">
      <Stack.Screen name={"GradesLanding"} component={GradesLanding} />
      <Stack.Screen name="GradesMaths" component={GradesMaths} />
      <Stack.Screen name="GradesChemistry" component={GradesChemistry} />
      <Stack.Screen name="GradesPhysics" component={GradesPhysics} />
    </Stack.Navigator>
  );
};

export default Grades;
