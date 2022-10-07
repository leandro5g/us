import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  flex-direction: row;
  align-items: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ContentText = styled.View`
  flex: 1;
  margin: 0px ${RFValue(10)}px;
`;
