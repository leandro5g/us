import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  height: ${RFValue(80)}px;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
