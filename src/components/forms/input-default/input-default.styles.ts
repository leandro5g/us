import styled, { css } from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

type ContainerPropsInputProps = {
  notMargin?: boolean;
  isFocus?: boolean;
  isError?: boolean;
};

type ContainerProps = {
  notMargin?: boolean;
};

export const Container = styled.View<ContainerProps>`
  margin-bottom: ${({ theme, notMargin }) =>
    notMargin ? 0 : theme.METRICS.PADDING_VERTICAL}px;
`;

export const ContainerInput = styled.View<ContainerPropsInputProps>`
  width: 100%;
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;

  flex-direction: row;
  align-items: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  border-width: ${RFValue(1)}px;
  border-color: transparent;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    `}

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.COLORS.ALERT};
    `}
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.ALERT};
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  margin-top: ${RFValue(4)}px;
`;
