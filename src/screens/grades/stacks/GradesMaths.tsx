import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GradesStackNavProps } from "../../../params";
import { FONTS } from "../../../constants";

const GradesMaths: React.FC<GradesStackNavProps<"GradesMaths">> = ({
  navigation,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAllowFontScaling: true,
      title: "MATHEMATICS GRADES",
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
            GRADES
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <Text>Maths Grades will be here</Text>
      </View>
    </View>
  );
};

export default GradesMaths;
