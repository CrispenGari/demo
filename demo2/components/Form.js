import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { db } from "../db";
import { ALL_TODOS_COMMAND, INSERT_TODO_COMMAND } from "../comands";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../actions";

const Form = () => {
  const [title, setTitle] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function addTodo() {
    if (title.length < 3) {
      return;
    }
    db.transaction((transaction) => {
      transaction.executeSql(
        INSERT_TODO_COMMAND,
        [title, user?.id],
        (transaction, { rows, insertId }) => {
          // inserted todo
          transaction.executeSql(
            ALL_TODOS_COMMAND,
            [user?.id],
            (transaction, { rows }) => {
              dispatch(setTodos(rows._array));
            },
            (transaction, { message }) => console.log(message)
          );
          setTitle("");
        },
        (transaction, { message }) => {
          console(message);
        }
      );
    });
  }
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        padding: 10,
      }}
    >
      <TextInput
        onSubmitEditing={addTodo}
        placeholder="Enter todo title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          backgroundColor: "white",
          fontSize: 20,
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "red",
        }}
      />
    </View>
  );
};

export default Form;
