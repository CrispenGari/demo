import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { GradesStackNavProps } from "../../../params";
import { FONTS } from "../../../constants";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import IconButton from "../../../components/IconButton";
const Landing: React.FC<GradesStackNavProps<"GradesLanding">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Grades",
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
        textTransform: "uppercase",
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
        onPress={() => navigation.navigate("GradesMaths")}
        description={
          "Open this to see your quiz, tests and exam grades for Mathematics."
        }
      />
      <IconButton
        onPress={() => navigation.navigate("GradesPhysics")}
        Icon={{
          name: "chemical-weapon",
          IconFamily: MaterialCommunityIcons,
          color: "gray",
          size: 40,
        }}
        title="PHYSICS"
        disabled
        description={
          "Open this to see your quiz, tests and exam grades for Physics."
        }
      />
      <IconButton
        disabled
        onPress={() => navigation.navigate("GradesChemistry")}
        Icon={{
          name: "chemistry",
          IconFamily: SimpleLineIcons,
          color: "gray",
          size: 40,
        }}
        title="CHEMISTRY"
        description={
          "Open this to see your quiz, tests and exam grades for Chemistry."
        }
      />

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
    </ScrollView>
  );
};

export default Landing;
