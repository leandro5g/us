import { RFValue } from "../libs/react-native-responsive-font-size";

export const THEME = {
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
    BG_RGBA: "rgba(0,0,0,0.5)",
  },

  FONTS: {
    REGULAR: "Inter_400Regular",
    MEDIUM: "Inter_500Medium",
    SEMIBOLD: "Inter_600SemiBold",
    BOLD: "Inter_700Bold",
  },

  FONTSIZES: {
    SM: RFValue(16),
    SM2: RFValue(18),
    MD: RFValue(22),
  },

  METRICS: {
    PADDING: RFValue(24),
    PADDING_VERTICAL: RFValue(20),
  },
};
