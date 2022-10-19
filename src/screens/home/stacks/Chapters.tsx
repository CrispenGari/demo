import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { FONTS } from "../../../constants";
import { HomeStackNavProps } from "../../../params";
import { Ionicons } from "@expo/vector-icons";
const Chapters: React.FC<HomeStackNavProps<"Chapters">> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAllowFontScaling: true,
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
        textTransform: "uppercase",
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="cornflowerblue"
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONTS.regularBold,
              marginLeft: 5,
              color: "cornflowerblue",
            }}
          >
            MATHS
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <Text>Chapters</Text>
    </View>
  );
};

export default Chapters;
