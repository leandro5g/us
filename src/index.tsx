import React from "react";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./global/styles/theme";
import { Home } from "./pages/home/home.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
};

export { MyApp };
