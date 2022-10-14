import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './routes';
import { SignIn } from './pages/sign-in/sign-in.screen';
import { SignUp } from './pages/sign-up/sign-up.screen';
import { ThemeProviderStyle } from './global/styles/providers/theme-provider';

const MyApp: React.FC = () => {
  return (
    <ThemeProviderStyle>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Routes />
    </ThemeProviderStyle>
  );
};

export { MyApp };
