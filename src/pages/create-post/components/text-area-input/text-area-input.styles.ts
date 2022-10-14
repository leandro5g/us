import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: ${({ theme }) => theme.FONTSIZES.MD}px;
    color: ${({ theme }) => theme.COLORS.CAPTION_300};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
