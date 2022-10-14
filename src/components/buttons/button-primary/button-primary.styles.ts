import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
