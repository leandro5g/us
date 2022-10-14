import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from '../../../../global/libs/react-native-responsive-font-size';
import { useTheme } from 'styled-components';

import { Container } from './button-tab.styles';

const ButtonTab: React.FC = () => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Ionicons
                name="ios-add-circle-outline"
                size={RFValue(30)}
                color={COLORS.TEXT}
            />
        </Container>
    );
};

export { ButtonTab };
