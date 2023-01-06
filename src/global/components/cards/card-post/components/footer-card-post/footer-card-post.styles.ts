import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "../../../../../libs/responsive-size";

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.METRICS.PADDING / 1.5}px
    ${({ theme }) => theme.METRICS.PADDING}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconTrash = styled(Feather).attrs(({ theme }) => ({
  name: "trash-2",
  size: RFValue(24),
  color: theme.COLORS.CAPTION_400
}))`
  position: absolute;
  z-index: 999;
  right: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const IconMessage = styled(Feather).attrs(({ theme }) => ({
  name: "message-square",
  size: RFValue(24),
  color: theme.COLORS.CAPTION_400
}))`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(15)}px;
  margin-right: ${RFValue(10)}px;
`;
