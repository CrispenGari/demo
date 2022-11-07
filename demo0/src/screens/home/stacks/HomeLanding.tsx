import { View, Text, Button, ScrollView, Platform } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../types";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import IconButton from "../../../components/IconButton";
import { HomeStackNavProps } from "../../../params";
import { FONTS } from "../../../constants";

const Landing: React.FC<HomeStackNavProps<"HomeLanding">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "STEM SUBJECTS",
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
      },
    });
  }, []);
  return (
    <ScrollView style={{ paddingVertical: 10, backgroundColor: "white" }}>
      <IconButton
        Icon={{
          name: "calculator",
          IconFamily: AntDesign,
          color: "gray",
          size: 40,
        }}
        title="MATHEMATICS"
        onPress={() => navigation.navigate("Maths")}
        description={
          "Open the subject to read chapters, practice quiz, tests and past exam questions."
        }
      />
      <IconButton
        onPress={() => navigation.navigate("Physics")}
        Icon={{
          name: "chemical-weapon",
          IconFamily: MaterialCommunityIcons,
          color: "gray",
          size: 40,
        }}
        title="PHYSICS"
        disabled
        description={
          "Open the subject to read chapters, practice quiz, tests and past exam questions."
        }
      />
      <IconButton
        disabled
        onPress={() => navigation.navigate("Chemistry")}
        Icon={{
          name: "chemistry",
          IconFamily: SimpleLineIcons,
          color: "gray",
          size: 40,
        }}
        title="CHEMISTRY"
        description={
          "Open the subject to read chapters, practice quiz, tests and past exam questions."
        }
      />
      {Platform.OS === "ios" ? null : (
        <Text
          style={{
            width: "100%",
            padding: 10,
            textAlign: "center",
            fontFamily: FONTS.italic,
            color: "gray",
            marginTop: 30,
          }}
        >
          This application is currently supporting one subject which is "Maths".
          For other subjects wait for newer versions.
        </Text>
      )}
    </ScrollView>
  );
};

export default Landing;
