import { View, Text } from "react-native";
import React from "react";
import { FONTS } from "../../constants";
import Slider from "@react-native-community/slider";
import * as Brightness from "expo-brightness";

const BrightnessSettings = () => {
  const [brightness, setBrightness] = React.useState(0);

  React.useLayoutEffect(() => {
    (async () => {
      const brightness = await Brightness.getBrightnessAsync();
      setBrightness(brightness);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        Brightness.setSystemBrightnessAsync(brightness);
      }
    })();
  }, [brightness]);
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
        Change Brightness
      </Text>
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="cornflowerblue"
          maximumTrackTintColor="lightgray"
          value={brightness}
          onValueChange={(v) => setBrightness(v)}
        />
        <Text
          style={{
            width: 50,
            textAlign: "center",
            color: brightness >= 0.75 ? "red" : "cornflowerblue",
            fontFamily: FONTS.regularBold,
          }}
        >{`${(brightness * 100).toFixed(1)}%`}</Text>
      </View>
      <Text
        style={{
          color: "gray",
          fontFamily: FONTS.regular,
          marginTop: 10,
        }}
      >
        Changing the brightness of your phone will help you to study for long.
      </Text>
    </View>
  );
};

export default BrightnessSettings;
