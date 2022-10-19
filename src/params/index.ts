import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//  Application Param Lists
export type AppParamList = {
  Home: undefined;
  Grades: {
    userId: number;
  };
  Notifications: undefined;
  Settings: undefined;
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: BottomTabNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};

// // Home Stacks Param List

export type HomeStackParamList = {
  Chapters: undefined;
  HomeLanding: undefined;
  StartTest: undefined;
  SeeGrades: undefined;
  Chemistry: undefined;
  Physics: undefined;
  Maths: undefined;
  Tests: undefined;
  Quiz: undefined;
  Exams: undefined;
  ReadChapter: {
    subject: string;
    chapter: any;
  };
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: BottomTabNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

// // Grades Stacks Param List

export type GradesStackParamList = {
  GradesLanding: undefined;
  GradesChemistry: undefined;
  GradesPhysics: undefined;
  GradesMaths: undefined;
};

export type GradesStackNavProps<T extends keyof GradesStackParamList> = {
  navigation: BottomTabNavigationProp<GradesStackParamList, T>;
  route: RouteProp<GradesStackParamList, T>;
};

// // Settings Stacks Param List

export type SettingsStackParamList = {
  SettingsLanding: undefined;
};

export type SettingsStackNavProps<T extends keyof SettingsStackParamList> = {
  navigation: BottomTabNavigationProp<SettingsStackParamList, T>;
  route: RouteProp<SettingsStackParamList, T>;
};
// // Home Stacks Param List

export type NotificationsStackParamList = {
  NotificationsLanding: undefined;
};

export type NotificationsStackNavProps<
  T extends keyof NotificationsStackParamList
> = {
  navigation: BottomTabNavigationProp<NotificationsStackParamList, T>;
  route: RouteProp<NotificationsStackParamList, T>;
};
