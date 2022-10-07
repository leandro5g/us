import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./global/styles/theme";

import { Routes } from "./routes";
import { SignIn } from "./pages/sign-in/sign-in.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <SignIn />
    </ThemeProvider>
  );
};

export { MyApp };
