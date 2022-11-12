import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

const openDatabase = (databaseName) => {
  if (Platform.OS === "web") {
    return;
  }
  return SQLite.openDatabase(databaseName);
};

const databaseName = "todos.db";
export const db = openDatabase(databaseName);
