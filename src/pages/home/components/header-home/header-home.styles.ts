import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  width: 64%;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
