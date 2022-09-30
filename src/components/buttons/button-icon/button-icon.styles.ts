import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

type ContainerProps = {
  isPrimary?: boolean;
};

export const Container = styled.View<ContainerProps>`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND};
  border-radius: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;
