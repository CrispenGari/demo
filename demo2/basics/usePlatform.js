import { Platform } from "react-native";

const usePlatform = () => {
  return {
    os: Platform.OS,
    version: Platform.Version,
  };
};

export default usePlatform;
