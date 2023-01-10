import React from "react";
import { ThemeProvider } from "styled-components";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { THEME_DARK } from "../styles/themes/dark";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <BottomSheetModalProvider>
      <ThemeProvider theme={THEME_DARK}>{children}</ThemeProvider>
    </BottomSheetModalProvider>
  );
};

export { AppProvider };
