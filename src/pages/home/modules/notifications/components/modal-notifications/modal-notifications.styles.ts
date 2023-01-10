import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

import { Fontisto } from "@expo/vector-icons";

export const Container = styled.View``;

export const ContentModal = styled.View`
  height: ${RFValue(400)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const IconNotification = styled(Fontisto).attrs(({ theme }) => ({
  name: "bell",
  size: RFValue(24),
  color: theme.COLORS.CAPTION_300
}))`
  margin-right: ${RFValue(15)}px;
`;
