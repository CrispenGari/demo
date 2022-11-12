import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "./auth/Register";
import Home from "./app/Home";
import Create from "./app/Create";
import Completed from "./app/Completed";
import Login from "./auth/Login";
import Landing from "./auth/Landing";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Routes = () => {
  // if the user is authenticated we show app tabs else auth stack
  const user = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!!!user ? (
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      ) : (
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
              ),
            }}
          />
          <Tabs.Screen
            name="Completed"
            options={{
              tabBarIcon: () => (
                <AntDesign name="check" size={24} color="black" />
              ),
            }}
            component={Completed}
          />
          <Tabs.Screen
            name="Create"
            component={Create}
            options={{
              tabBarIcon: () => (
                <AntDesign name="addfile" size={24} color="black" />
              ),
            }}
          />
        </Tabs.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
