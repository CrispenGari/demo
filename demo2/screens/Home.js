import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../db";
import { ALL_TODOS_COMMAND, CREATE_TABLE_COMMAND } from "../comands";
import Form from "../components/Form";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../actions";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    db.transaction((transaction) => {
      transaction.executeSql(
        CREATE_TABLE_COMMAND,
        [],
        (transaction, { rows }) => {
          console.log("Table has been created");
        },
        (transaction, { message }) => {
          console.log(message);
        }
      );
    });
  }, []);

  useEffect(() => {
    db.transaction((transaction) => {
      transaction.executeSql(
        ALL_TODOS_COMMAND,
        [],
        (transaction, { rows }) => {
          dispatch(setTodos(rows._array));
        },
        (transaction, { message }) => console.log(message)
      );
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Form />
      {/* List of todos */}
      <ScrollView>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
