import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "../../../libs/responsive-size";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG_RGBA};
  justify-content: flex-end;
`;

export const Group = styled.View`
  flex: 1;
`;

export const HeaderModal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.METRICS.PADDING_VERTICAL}px
    ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const KeyboardAvoiding = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "position" : undefined
})``;

export const IconClose = styled(AntDesign).attrs(({ theme }) => ({
  name: "close",
  size: RFValue(24),
  color: theme.COLORS.CAPTION_300
}))`
  margin-right: ${RFValue(20)}px;
`;
