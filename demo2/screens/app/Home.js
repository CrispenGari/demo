import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import React from "react";
import { db } from "../../db";
import { ALL_TODOS_COMMAND } from "../../comands";
import { useDispatch, useSelector } from "react-redux";
import { setTodos, setUser } from "../../actions";
import Todo from "../../components/Todo";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const todos = useSelector((state) => state.todos);

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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              All Todos
            </Text>

            <Button
              title="Logout"
              onPress={() => {
                dispatch(setUser(null));
              }}
            />
          </View>
        )}
        keyExtractor={(todo) => todo.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
