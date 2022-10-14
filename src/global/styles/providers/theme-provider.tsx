import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { THEME_DARK } from '../themes/dark';

type ThemeProviderStyleProps = {
    children: React.ReactNode;
};

const ThemeProviderStyle: React.FC<ThemeProviderStyleProps> = ({
    children
}) => {
    return <ThemeProvider theme={THEME_DARK}>{children}</ThemeProvider>;
};

export { ThemeProviderStyle };
