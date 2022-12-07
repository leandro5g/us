import styled from "styled-components/native";
import { RFValue } from "../../global/libs/responsive-size";

import { SubTitleDefault } from "../../global/components/texts/sub-title-default/sub-title-default.component";

import LoginSvg from "../../assets/svgs/login-svg.svg";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-top: ${RFValue(10)}px;
`;

export const SignInSvg = styled(LoginSvg).attrs({
  height: RFValue(320),
  width: RFValue(320)
})`
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const DescriptionLogin = styled(SubTitleDefault).attrs({
  type: "SPAM"
})`
  margin: ${RFValue(24)}px 0px;
`;
