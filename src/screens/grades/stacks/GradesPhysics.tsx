import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "../../../components";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { GradesStackNavProps } from "../../../params";

const GradesPhysics: React.FC<GradesStackNavProps<"GradesPhysics">> = ({
  navigation,
}) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <Text>Physics Grades will be here</Text>
      </View>
    </View>
  );
};

export default GradesPhysics;
