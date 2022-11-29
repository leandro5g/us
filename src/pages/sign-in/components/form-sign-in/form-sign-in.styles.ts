import styled from "styled-components/native";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";
import { RFValue } from "../../../../global/libs/responsive-size";

export const Container = styled.View``;

export const Content = styled.View``;

export const ButtonPasswordRecovery = styled(ButtonVoid)`
  align-self: flex-start;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING_VERTICAL}px;
`;

export const ButtonSignUp = styled(ButtonVoid)`
  margin-top: ${({ theme }) => theme.METRICS.PADDING_VERTICAL}px;
`;
