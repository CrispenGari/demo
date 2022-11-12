import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers";
import Routes from "./screens/Routes";
import { db } from "./db";
import {
  CREATE_TODO_TABLE_COMMAND,
  CREATE_USER_TABLE_COMMAND,
} from "./comands";

const App = () => {
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        CREATE_TODO_TABLE_COMMAND,
        [],
        (tx, { rows }) => {
          console.log("Todo table create");
          tx.executeSql(
            CREATE_USER_TABLE_COMMAND,
            [],
            (txt, {}) => {
              console.log("User table created");
            },
            (tx, error) => console.log(error)
          );
        },
        (tx, error) => {
          console.log({ error });
        }
      );
    });
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
