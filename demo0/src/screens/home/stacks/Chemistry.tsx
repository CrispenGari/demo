import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "../../../components";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { HomeStackNavProps } from "../../../params";

const Chemistry: React.FC<HomeStackNavProps<"Chemistry">> = ({
  navigation,
}) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          Icon={{
            name: "ab-testing",
            IconFamily: MaterialCommunityIcons,
            color: "cornflowerblue",
            size: 30,
          }}
          title="MATHEMATICS"
          onPress={() => navigation.navigate("Maths")}
        />
        <IconButton
          onPress={() => navigation.navigate("Physics")}
          Icon={{
            name: "clipboard-notes",
            IconFamily: Foundation,
            color: "gray",
            size: 30,
          }}
          title="PHYSICS"
        />
        <IconButton
          onPress={() => navigation.navigate("Chemistry")}
          Icon={{
            name: "clipboard-notes",
            IconFamily: Foundation,
            color: "gray",
            size: 30,
          }}
          title="CHEMISTRY"
        />
      </View>
    </View>
  );
};

export default Chemistry;
