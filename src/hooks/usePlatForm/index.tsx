import { Platform } from "react-native";
const usePlatForm = () => {
  return { os: Platform.OS };
};

export default usePlatForm;
