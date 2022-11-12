import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Landing = ({ route, navigation }) => {
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "cornflowerblue",
            padding: 10,
            width: 100,
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={() => {
            navigation.push("Register");
          }}
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

export default Landing;
