import { View, Text } from "react-native";
import React, { useState } from "react";
import { FONTS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BatteryState, getPowerStateAsync } from "expo-battery";
import { Switch } from "react-native-paper";

const getBatteryLevel = (level: number) => {
  if (level <= 10) {
    return 10;
  } else if (level > 10 && level <= 20) {
    return 20;
  } else if (level > 20 && level <= 30) {
    return 30;
  } else if (level > 30 && level <= 40) {
    return 40;
  } else if (level > 40 && level <= 50) {
    return 50;
  } else if (level > 50 && level <= 60) {
    return 60;
  } else if (level > 60 && level <= 70) {
    return 70;
  } else if (level > 70 && level <= 80) {
    return 80;
  } else if (level > 80 && level <= 90) {
    return 90;
  } else {
    return -1;
  }
};
const BatterySettingsCard = () => {
  const [level, setLevel] = useState(0);
  const [charging, setCharging] = useState(false);
  const [lowMode, setLowMode] = useState(false);
  const [iconName, setIconName] = useState("battery");
  const [reduceBrightness, setReduceBrightness] = useState(false);

  React.useLayoutEffect(() => {
    (async () => {
      const { batteryLevel, lowPowerMode, batteryState } =
        await getPowerStateAsync();
      setLevel(batteryLevel);
      setLowMode(lowPowerMode);
      setCharging(BatteryState.CHARGING === batteryState);
      if (getBatteryLevel(batteryLevel * 100) === -1) {
        if (batteryState === BatteryState.CHARGING) {
          setIconName(`battery-charging`);
        } else if (batteryState === BatteryState.UNKNOWN) {
          setIconName(`battery-alert`);
        } else {
          setIconName(`battery`);
        }
      } else {
        if (batteryState === BatteryState.CHARGING) {
          setIconName(
            `battery-charging-${getBatteryLevel(batteryLevel * 100)}`
          );
        } else {
          setIconName(`battery-${getBatteryLevel(batteryLevel * 100)}`);
        }
      }
    })();
  }, []);
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
        Your Battery
      </Text>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <MaterialCommunityIcons
          name={iconName as any}
          size={40}
          color={lowMode ? "red" : "green"}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontFamily: FONTS.regularExtraBold,
              color: lowMode ? "red" : "green",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            {(level * 100).toFixed(0)}%
          </Text>
          <Text style={{ color: "gray", fontFamily: FONTS.regular }}>
            {charging ? "charging" : "not charging"}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontFamily: FONTS.regularBold }}>
          Brightness Auto Adjust
        </Text>
        <Switch
          trackColor={{
            true: "cornflowerblue",
            false: "gray",
          }}
          value={reduceBrightness}
          onValueChange={(value) => setReduceBrightness(value)}
        />
      </View>
      <Text
        style={{
          color: "gray",
          fontFamily: FONTS.regular,
          marginTop: 10,
        }}
      >
        Changing the brightness levels helps you to study improve you battery
        life. By turning the automatic change brightness setting, your
        brightness will be lowered to recommended settings when the battery is
        less than 51%.
      </Text>
    </View>
  );
};

export default BatterySettingsCard;
