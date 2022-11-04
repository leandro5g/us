import React from "react";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
import { AuthContexts } from "./contexts/auth-contexts";

import { Routes } from "./routes";

import { ThemeProviderStyle } from "./global/styles/providers/theme-provider";
import { THEME_DARK } from "./global/styles/themes/dark";

const MyApp: React.FC = () => {
  return (
    <ThemeProviderStyle>
      <ToastProvider offset={THEME_DARK.METRICS.OFF_SET_TOP}>
        <StatusBar translucent backgroundColor="transparent" style="light" />
        <AuthContexts>
          <Routes />
        </AuthContexts>
      </ToastProvider>
    </ThemeProviderStyle>
  );
};

export { MyApp };
