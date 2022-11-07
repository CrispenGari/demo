import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { IconButton } from "../../../components";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { HomeStackNavProps } from "../../../params";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { FONTS } from "../../../constants";

const Maths: React.FC<HomeStackNavProps<"Maths">> = ({ navigation }) => {
  useLayoutEffect(() => {
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
            STEM
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingVertical: 10, flex: 1 }}
    >
      <IconButton
        Icon={{
          name: "book",
          IconFamily: AntDesign,
          color: "gray",
          size: 40,
        }}
        title="READ CHAPTERS"
        onPress={() => navigation.navigate("Chapters")}
        description={
          "Read the chapters in this subject and take quiz after every chapter."
        }
      />
      <IconButton
        onPress={() => navigation.navigate("Quiz")}
        Icon={{
          name: "library-books",
          IconFamily: MaterialIcons,
          color: "gray",
          size: 40,
        }}
        title="QUIZ"
        description={
          "Take the quiz for each chapter without reading the chapter."
        }
      />
      <IconButton
        onPress={() => navigation.navigate("Tests")}
        Icon={{
          name: "ab-testing",
          IconFamily: MaterialCommunityIcons,
          color: "gray",
          size: 40,
        }}
        title="TESTS"
        description={
          "Write tests for each chapter based on the knowledge you have."
        }
      />
      <IconButton
        onPress={() => navigation.navigate("Exams")}
        Icon={{
          name: "pencil-square-o",
          IconFamily: FontAwesome,
          color: "gray",
          size: 40,
        }}
        title="EXAMS"
        description={
          "Write a typical exam based on all chapters of this subject."
        }
      />
    </ScrollView>
  );
};

export default Maths;
