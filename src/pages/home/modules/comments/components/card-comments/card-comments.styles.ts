import styled from "styled-components/native";
import { SubTitleDefault } from "../../../../../../global/components/texts/sub-title-default/sub-title-default.component";
import { TextDefault } from "../../../../../../global/components/texts/text-default/text-default.component";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${RFValue(40)}px;
`;

export const Content = styled.View`
  margin-left: ${RFValue(20)}px;
  flex: 1;
`;

export const NameUserComment = styled(TextDefault)`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ContentComment = styled(SubTitleDefault)`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  margin-top: ${RFValue(6)}px;
`;
