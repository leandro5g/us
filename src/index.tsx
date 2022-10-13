import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./global/styles/theme";

import { Routes } from "./routes";
import { SignIn } from "./pages/sign-in/sign-in.screen";
import { SignUp } from "./pages/sign-up/sign-up.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <SignUp />
    </ThemeProvider>
  );
};

export { MyApp };
