import styled, { css } from 'styled-components/native';
import { RFValue } from '../../../global/libs/react-native-responsive-font-size';

type TextProps = {
    isSub?: boolean;
    isLarge?: boolean;
};

export const Text = styled.Text<TextProps>`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme, isSub }) =>
        isSub ? theme.FONTS.REGULAR : theme.FONTS.BOLD};

    ${({ isLarge }) =>
        isLarge &&
        css`
            font-size: ${RFValue(38)}px;
            font-family: ${({ theme }) => theme.FONTS.BOLD};
        `}
`;
