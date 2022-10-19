import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { FONTS } from "../../../constants";
import { HomeStackNavProps } from "../../../params";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ReadChapter: React.FC<HomeStackNavProps<"ReadChapter">> = ({
  navigation,
  route: {
    params: { chapter, subject },
  },
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAllowFontScaling: true,
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
        textTransform: "uppercase",
      },
      title: chapter.title,
      headerRight: () => (
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 18,
            fontFamily: FONTS.regularBold,
            marginLeft: 5,
            color: "gray",
            textTransform: "uppercase",
          }}
        >
          {subject}
        </Text>
      ),
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
            Chapters
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView
      style={{
        padding: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: FONTS.regularExtraBold,
          fontSize: 20,
          paddingVertical: 10,
        }}
      >
        {chapter.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: FONTS.regular,
          paddingVertical: 10,
        }}
      >
        {chapter.description}
      </Text>

      <View style={{}}>
        <Button
          title="Next Chapter"
          onPress={
            () => {}
            // navigation.navigate("ReadChapter", {
            //   chapter: chapter,
            //   subject: "Maths",
            // })
          }
        />
        <Button title="Previous Chapter" onPress={() => navigation.goBack()} />
        <Button title="Take Quiz" onPress={() => navigation.navigate("Quiz")} />
      </View>
    </ScrollView>
  );
};

export default ReadChapter;
