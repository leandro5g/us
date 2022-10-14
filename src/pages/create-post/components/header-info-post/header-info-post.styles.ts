import styled from 'styled-components/native';
import { RFValue } from '../../../../global/libs/react-native-responsive-font-size';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.SHAPE};
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.COLORS.BORDER};
    align-items: flex-start;
    justify-content: center;
    padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const ContainerFeeling = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonFeeling = styled.TouchableOpacity`
    height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
    margin-left: ${RFValue(4)}px;
    justify-content: center;
    align-items: center;
    padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;
`;
