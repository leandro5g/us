import styled from "styled-components/native";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerFeeling = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonFeeling = styled(ButtonVoid)`
  margin-left: ${RFValue(4)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(16)}px;
`;
