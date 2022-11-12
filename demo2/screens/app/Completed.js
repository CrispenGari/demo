import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { db } from "../../db";
import { ALL_TODOS_COMMAND } from "../../comands";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../actions";
import Todo from "../../components/Todo";
const Completed = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const todos = useSelector((state) => state.todos?.filter((t) => t.completed));

  React.useEffect(() => {
    db.transaction((transaction) => {
      transaction.executeSql(
        ALL_TODOS_COMMAND,
        [user?.id],
        (transaction, { rows }) => {
          dispatch(setTodos(rows._array));
        },
        (transaction, { message }) => console.log({ message })
      );
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={() => (
          <View
            style={{
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Completed Todos
            </Text>
          </View>
        )}
        keyExtractor={(todo) => todo.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
      />
    </SafeAreaView>
  );
};

export default Completed;

const styles = StyleSheet.create({});
