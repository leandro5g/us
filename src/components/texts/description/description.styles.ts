import styled, { css } from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

type DescriptionProps = {
  isSpam: boolean;
  isHastag?: boolean;
};

export const Text = styled.Text<DescriptionProps>`
  color: ${({ theme, isSpam }) =>
    isSpam ? theme.COLORS.CAPTION_300 : theme.COLORS.CAPTION_400};
  font-size: ${({ theme, isSpam }) =>
    isSpam ? theme.FONTSIZES.SM2 : theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  line-height: ${RFValue(28)}px;

  ${({ isHastag }) =>
    isHastag &&
    css`
      font-family: ${({ theme }) => theme.FONTS.BOLD};
      color: ${({ theme }) => theme.COLORS.CAPTION_300};
      font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
    `}
`;
