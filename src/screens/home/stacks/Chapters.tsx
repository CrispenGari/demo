import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { FONTS } from "../../../constants";
import { HomeStackNavProps } from "../../../params";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { chapters } from "../../../db";
import { IconButton } from "../../../components";
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
    <ScrollView style={{ flex: 1 }}>
      {chapters.map((chapter) => (
        <IconButton
          onPress={() =>
            navigation.navigate("ReadChapter", {
              subject: "Maths",
              chapter: chapter,
            })
          }
          key={chapter.id.toString()}
          title={chapter.title}
          Icon={{
            color: "gray",
            name: "open-book",
            size: 30,
            IconFamily: Entypo,
          }}
          description={chapter.description}
        />
      ))}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default Chapters;
