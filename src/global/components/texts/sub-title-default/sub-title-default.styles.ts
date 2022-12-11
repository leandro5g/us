import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-size";

export type SubTitleType = "HASTAG" | "ACTION" | "SPAM";

type TextProps = {
  type?: SubTitleType;
};

export const Text = styled.Text<TextProps>`
  color: ${({ theme }) => theme.COLORS.CAPTION_400};
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  line-height: ${({ theme }) => theme.FONTSIZES.SM + RFValue(8)}px;

  ${({ type }) =>
    type === "HASTAG" &&
    css`
      font-family: ${({ theme }) => theme.FONTS.BOLD};
      color: ${({ theme }) => theme.COLORS.CAPTION_300};
      font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
    `}

  ${({ type }) =>
    type === "ACTION" &&
    css`
      font-family: ${({ theme }) => theme.FONTS.BOLD};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
    `}
  ${({ type }) =>
    type === "SPAM" &&
    css`
      font-family: ${({ theme }) => theme.FONTS.REGULAR};
      color: ${({ theme }) => theme.COLORS.TEXT};
      font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
      line-height: ${({ theme }) => theme.FONTSIZES.SM3 + RFValue(10)}px;
    `}
`;
