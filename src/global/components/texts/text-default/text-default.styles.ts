import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-size";

type PropsText = {
  type: string;
};

export const Text = styled.Text<PropsText>`
  ${({ type }) =>
    type === "h1" &&
    css`
      color: ${({ theme }) => theme.COLORS.TITLES};
      font-size: ${RFValue(38)}px;
      font-family: ${({ theme }) => theme.FONTS.BOLD};
    `}

  ${({ type }) =>
    type === "h2" &&
    css`
      font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
      color: ${({ theme }) => theme.COLORS.TITLES};
      font-size: ${({ theme }) => theme.FONTS_SIZES.MD2}px;
    `}

  ${({ type }) =>
    type === "h3" &&
    css`
      font-family: ${({ theme }) => theme.FONTS.REGULAR};
      color: ${({ theme }) => theme.COLORS.TITLES};
      font-size: ${({ theme }) => theme.FONTS_SIZES.MD}px;
    `}
`;
