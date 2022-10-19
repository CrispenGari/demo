import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { FONTS } from "../../constants";

type IconT = {
  name: string;
  IconFamily: any;
  size: number;
  color: string;
};
interface Props {
  children?: React.ReactNode;
  Icon: IconT;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  description?: string;
}
const IconButton: React.FC<Props> = ({
  title,
  Icon,
  onPress,
  disabled,
  description,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        borderColor: "gray",
        backgroundColor: "white",
        borderBottomWidth: 0.4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Icon.IconFamily name={Icon.name} size={Icon.size} color={Icon.color} />
      <View
        style={{
          paddingHorizontal: 10,
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <Text
          style={{
            marginTop: 5,
            fontFamily: FONTS.regularBold,
            marginBottom: 2,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "gray", fontFamily: FONTS.regular }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
