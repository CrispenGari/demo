import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { db } from "../../db";
import { LOGIN_COMMAND, REGISTER_COMMAND } from "../../comands";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions";

const Register = ({ navigation }) => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const dispatch = useDispatch();
  const register = async () => {
    if (password.trim() < 3) {
      setError("No the password is bad");
      return;
    }
    if (email.indexOf("@") === -1) {
      setError("The email must have @");
      return;
    }
    db.transaction((tx) => {
      tx.executeSql(
        REGISTER_COMMAND,
        [email.trim().toLocaleLowerCase(), password.trim()],
        (tx, { rows }) => {
          console.log(rows);
          setError("");

          db.transaction((tx) => {
            tx.executeSql(
              LOGIN_COMMAND,
              [email.trim().toLocaleLowerCase(), password.trim()],
              (tx, { rows }) => {
                const user = rows._array[0];
                dispatch(setUser(user ?? null));
              },
              (tx, { message }) => {
                console.log({ message });
              }
            );
          });
        },
        (tx, { message, code }) => {
          if (message.indexOf("UNIQUE") !== -1) {
            setError("The email is already taken");
          }
        }
      );
    });
  };
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={{
        uri: Image.resolveAssetSource(require("../../assets/bg.webp")).uri,
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
        }}
      />

      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, .6)",
          height: 500,
          width: "95%",
          margin: 10,
          borderRadius: 10,
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "800",
          }}
        >
          REGISTER
        </Text>

        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email address"
          style={{
            width: "80%",
            backgroundColor: "#f5f5f5",
            fontSize: 16,
            padding: 10,
            borderRadius: 999,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={{
            width: "80%",
            backgroundColor: "#f5f5f5",
            fontSize: 16,
            padding: 10,
            borderRadius: 999,
            marginVertical: 10,
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={register}
        />
        <Text style={{ color: "red", marginVertical: 10 }}>{error}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "cornflowerblue",
            padding: 10,
            width: 100,
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={register}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            width: 100,
            alignItems: "center",
            borderRadius: 5,
            marginTop: 30,
          }}
          onPress={() => {
            navigation.push("Login");
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;
