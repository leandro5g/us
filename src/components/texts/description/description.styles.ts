import styled, { css } from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

type DescriptionProps = {
  isSpam: boolean;
  isHastag?: boolean;
  isAction?: boolean;
};

export const styleIsHastag = css`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
`;

export const styleIsAction = css`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
`;

export const styleIsSpam = css`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  line-height: ${({ theme }) => theme.FONTSIZES.SM3 + RFValue(10)}px;
`;

export const Text = styled.Text<DescriptionProps>`
  color: ${({ theme, isSpam }) =>
    isSpam ? theme.COLORS.CAPTION_300 : theme.COLORS.CAPTION_400};
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  line-height: ${RFValue(28)}px;

  ${({ isHastag }) => isHastag && styleIsHastag}

  ${({ isAction }) => isAction && styleIsAction}

    ${({ isSpam }) => isSpam && styleIsSpam}
`;
