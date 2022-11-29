import styled from "styled-components/native";
import { RFValue } from "../../../../../global/libs/responsive-size";

type NameUserProps = {
  is_anonymos: boolean;
};

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING / 1.5}px
    ${({ theme }) => theme.METRICS.PADDING}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameUser = styled.Text<NameUserProps>`
  color: ${({ theme, is_anonymos }) =>
    is_anonymos ? theme.COLORS.CAPTION_400 : theme.COLORS.PRIMARY};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
`;
export const ContentInfo = styled.View`
  margin-left: ${RFValue(15)}px;
  justify-content: center;
`;
