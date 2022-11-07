import { View, Text } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";
import { FONTS } from "../../constants";
const ThemeSettingsCard = () => {
  const [dark, setDark] = useState(false);
  return (
    <View style={{ backgroundColor: "white", padding: 10, marginTop: 5 }}>
      <Text
        style={{
          fontFamily: FONTS.regularBold,
          textTransform: "uppercase",
          paddingBottom: 5,
          marginBottom: 5,
          color: "cornflowerblue",
        }}
      >
        Change Theme
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regularBold,
          }}
        >
          {dark ? "Dark" : "Light"}
        </Text>
        <Switch
          trackColor={{
            true: "cornflowerblue",
            false: "gray",
          }}
          value={dark}
          onValueChange={(value) => setDark(value)}
        />
      </View>

      <Text
        style={{
          color: "gray",
          fontFamily: FONTS.regular,
          marginTop: 10,
        }}
      >
        Changing the theme will help you to study for long.
      </Text>
    </View>
  );
};

export default ThemeSettingsCard;
