import { useWindowDimensions } from "react-native";
import ResponsiveFontSize from "react-native-responsive-fontsize";

const { width, height } = useWindowDimensions();

const SCREEN_HEIGHT = height > width ? height : width;

export function RFValue(value: number) {
  return ResponsiveFontSize.RFValue(value, SCREEN_HEIGHT);
}
