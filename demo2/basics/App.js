import { SafeAreaView } from "react-native";
import React from "react";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./reducers";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
