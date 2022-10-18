import { RFValue } from "../../libs/react-native-responsive-font-size";
import { StatusBar } from "react-native";
import { isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";

const isIphone = isIphoneX();
const HEIGHT_STATUS_BAR = isIphone
  ? getStatusBarHeight()
  : StatusBar.currentHeight;

export const THEME_DARK = {
  COLORS: {
    PRIMARY: "#8257e5",
    BACKGROUND: "#121214",
    SHAPE: "#202024",
    SHAPE_LIGHT: "#303033",
    TEXT: "#FFFFFF",
    CAPTION_500: "#71717A",
    CAPTION_400: "#A1A1AA",
    CAPTION_300: "#D4D4D8",
    BORDER: "#31313A",
    ALERT: "#F87171",
    BG_RGBA: "rgba(0,0,0,0.5)"
  },

  FONTS: {
    REGULAR: "Inter_400Regular",
    MEDIUM: "Inter_500Medium",
    SEMIBOLD: "Inter_600SemiBold",
    BOLD: "Inter_700Bold"
  },

  FONTSIZES: {
    SM: RFValue(16),
    SM2: RFValue(18),
    SM3: RFValue(20),
    MD: RFValue(22),
    MD2: RFValue(24)
  },

  METRICS: {
    PADDING: RFValue(24),
    PADDING_VERTICAL: RFValue(20),
    BUTTON_SIZE: RFValue(56),
    BORDER_RADIUS: RFValue(6),
    MARGIN_STATUS_BAR: HEIGHT_STATUS_BAR,
    OFF_SET_TOP: HEIGHT_STATUS_BAR + RFValue(30)
  }
};
