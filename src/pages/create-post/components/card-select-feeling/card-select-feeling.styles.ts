import styled, { css } from "styled-components/native";
import { RFValue } from "../../../../global/libs/responsive-size";

type ContainerProps = {
  isErrorFeeling: boolean;
};

export const Container = styled.View<ContainerProps>`
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
  justify-content: center;
  align-items: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;

  ${({ isErrorFeeling }) =>
    isErrorFeeling &&
    css`
      border-width: ${RFValue(1)}px;
      border-color: ${({ theme }) => theme.COLORS.ALERT};
    `}
`;
