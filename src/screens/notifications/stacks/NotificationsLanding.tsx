import { ScrollView, Text, View, Dimensions } from "react-native";
import React from "react";
import { FONTS } from "../../../constants";
import { NotificationsStackNavProps } from "../../../params";

const Landing: React.FC<NotificationsStackNavProps<"NotificationsLanding">> = ({
  navigation,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "NOTIFICATIONS",
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
      },
    });
  }, []);
  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: Dimensions.get("screen").height - 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: FONTS.regularBold, color: "gray" }}>
          No Notifications
        </Text>
      </View>
    </ScrollView>
  );
};

export default Landing;
