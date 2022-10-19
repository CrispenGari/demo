import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../../params";
import Home from "../../screens/home/Home";
import Grades from "../../screens/grades/Grades";
import Settings from "../../screens/settings/Settings";
import Notifications from "../../screens/notifications/Notifications";
import TabIcon from "../../components/TabIcon";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<AppParamList>();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderWidth: 0,
          borderColor: "transparent",
          backgroundColor: "white",
          paddingVertical: 10,
          height: 100,
          position: "absolute",
          bottom: 0,
        },
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: "cornflowerblue",
          color: "white",
          fontSize: 10,
          maxHeight: 20,
          maxWidth: 20,
          marginLeft: 3,
        },
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "timing",
          },
          show: {
            animation: "spring",
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="home"
              Icon={{
                name: "home",
                IconComponent: AntDesign,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Grades"
        component={Grades}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="grades"
              Icon={{
                name: "grade",
                IconComponent: MaterialIcons,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="settings"
              Icon={{
                name: "setting",
                IconComponent: AntDesign,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: (props) => (
            <TabIcon
              {...props}
              title="notifications"
              Icon={{
                name: "notifications-outline",
                IconComponent: Ionicons,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
