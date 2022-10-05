import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

const AVATAR_SIZE = RFValue(160);

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING}px;
  align-items: center;
`;

export const ContainerAvatar = styled.View`
  height: ${AVATAR_SIZE}px;
  width: ${AVATAR_SIZE}px;
  border-radius: ${AVATAR_SIZE / 2}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.CAPTION_400};
`;

export const Avatar = styled.Image`
  border-radius: ${AVATAR_SIZE / 2}px;
  flex: 1;
`;

export const TextButtonAvatar = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-top: ${({ theme }) => theme.METRICS.PADDING / 2}px;
`;
