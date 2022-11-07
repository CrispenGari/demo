import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsStackParamList } from "../../params";
import SettingsLanding from "./stacks/SettingsLanding";
const Stack = createStackNavigator<SettingsStackParamList>();
const Settings = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsLanding">
      <Stack.Screen name={"SettingsLanding"} component={SettingsLanding} />
    </Stack.Navigator>
  );
};

export default Settings;
