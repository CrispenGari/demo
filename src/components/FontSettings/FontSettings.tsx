import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS } from "../../constants";
import { RadioButton } from "react-native-paper";

const fontSizes: Array<{
  id: number;
  size: "small" | "medium" | "large";
}> = [
  {
    id: 0,
    size: "small",
  },
  {
    id: 1,
    size: "medium",
  },
  {
    id: 2,
    size: "large",
  },
];
const FontSettings = () => {
  const [fontSize, setFontSize] = React.useState("medium");
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
        Change Font Size
      </Text>
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <RadioButton.Group
          onValueChange={(v) => setFontSize(v)}
          value={fontSize}
        >
          {fontSizes.map(({ id, size }) => (
            <RadioButton.Item
              key={id.toLocaleString()}
              label={size}
              value={size}
              position="leading"
              mode="android"
              color="cornflowerblue"
              style={{
                width: "50%",
                alignItems: "center",
                paddingVertical: 0,
              }}
              status={size === fontSize ? "checked" : "unchecked"}
            />
          ))}
        </RadioButton.Group>
      </View>
      <Text
        style={{
          color: "gray",
          fontFamily: FONTS.regular,
          marginTop: 10,
        }}
      >
        Changing the font to either, small, medium or large helps you with your
        study experience.
      </Text>
    </View>
  );
};

export default FontSettings;
