import React from "react";
import { View, Image, Text } from "react-native";
interface IconI {
  IconComponent: any;
  name: string;
}
interface Props {
  title?: string;
  Icon: IconI;
  focused: boolean;
}
const TabIcon: React.FC<Props> = ({ focused, Icon, title }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <Icon.IconComponent
        name={Icon.name}
        size={20}
        color={focused ? "cornflowerblue" : "gray"}
      />
      <Text style={{ color: focused ? "cornflowerblue" : "gray" }}>
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
