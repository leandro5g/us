import styled, { css } from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

type ContainerProps = {
  isPrimary?: boolean;
  disable?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  width: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
  justify-content: center;
  align-items: center;

  ${({ disable }) =>
    disable &&
    css`
      background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
    `}
`;
