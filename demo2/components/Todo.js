import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { db } from "../db";
import {
  ALL_TODOS_COMMAND,
  DELETE_TODOS_COMMAND,
  UPDATE_TODOS_COMMAND,
} from "../comands";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  function deleteTodo() {
    db.transaction((transaction) => {
      transaction.executeSql(
        DELETE_TODOS_COMMAND,
        [todo.id],
        (transaction, { rows }) => {
          transaction.executeSql(
            ALL_TODOS_COMMAND,
            [user?.id],
            (transaction, { rows }) => {
              dispatch(setTodos(rows._array));
            },
            (transaction, { message }) => console.log(message)
          );
        }
      );
    });
  }
  function updateTodo() {
    db.transaction((transaction) => {
      transaction.executeSql(
        UPDATE_TODOS_COMMAND,
        [todo.completed === 0 ? 1 : 0, todo.id],
        (transaction, { rows }) => {
          transaction.executeSql(
            ALL_TODOS_COMMAND,
            [user.id],
            (transaction, { rows }) => {
              dispatch(setTodos(rows._array));
            },
            (transaction, { message }) => console.log(message)
          );
        }
      );
    });
  }
  return (
    <View
      style={{
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row",
        marginBottom: 5,
        backgroundColor: todo.completed === 1 ? "cornflowerblue" : "black",
      }}
    >
      <TouchableOpacity
        onPress={updateTodo}
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Entypo name="book" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            marginLeft: 10,
          }}
        >
          {todo.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteTodo}>
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
