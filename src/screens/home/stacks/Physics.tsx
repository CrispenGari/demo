import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "../../../components";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { HomeStackNavProps } from "../../../params";
const Physics: React.FC<HomeStackNavProps<"Physics">> = ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          Icon={{
            name: "math-compass",
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
            name: "chemical-weapon",
            IconFamily: MaterialCommunityIcons,
            color: "gray",
            size: 30,
          }}
          title="PHYSICS"
        />
        <IconButton
          onPress={() => navigation.navigate("Chemistry")}
          Icon={{
            name: "chemistry",
            IconFamily: SimpleLineIcons,
            color: "gray",
            size: 30,
          }}
          title="CHEMISTRY"
        />
      </View>
    </View>
  );
};

export default Physics;
