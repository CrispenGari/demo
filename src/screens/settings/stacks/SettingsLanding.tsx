import { View, ScrollView } from "react-native";
import React from "react";

import ThemeSettingsCard from "../../../components/ThemeSettingsCard";
import BrightnessSettings from "../../../components/BrightnessSettings";
import BatterySettingsCard from "../../../components/BatterySettingsCard";
import FontSettings from "../../../components/FontSettings/FontSettings";
import { FONTS } from "../../../constants";
import { SettingsStackNavProps } from "../../../params";

const SettingsLanding: React.FC<SettingsStackNavProps<"SettingsLanding">> = ({
  navigation,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "SETTINGS",
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
      },
    });
  }, []);
  return (
    <ScrollView style={{ paddingTop: 5, flex: 1 }}>
      <BatterySettingsCard />
      <FontSettings />
      <ThemeSettingsCard />
      <BrightnessSettings />
      <View
        style={{
          height: 150,
        }}
      />
    </ScrollView>
  );
};

export default SettingsLanding;
