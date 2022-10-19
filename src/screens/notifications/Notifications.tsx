import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NotificationsStackParamList } from "../../params";
import NotificationsLanding from "./stacks/NotificationsLanding";
const Stack = createStackNavigator<NotificationsStackParamList>();
const Notifications = () => {
  return (
    <Stack.Navigator initialRouteName="NotificationsLanding">
      <Stack.Screen
        name={"NotificationsLanding"}
        component={NotificationsLanding}
      />
    </Stack.Navigator>
  );
};

export default Notifications;
