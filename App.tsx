import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import ReduxProvider from "./src/providers/ReduxProvider";
import Routes from "./src/pages/Routes";
import { Fonts } from "./src/constants";

export default function App() {
  const [loaded] = useFonts(Fonts);

  LogBox.ignoreLogs;

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle={"dark-content"} />
      <ReduxProvider>
        <Routes />
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
