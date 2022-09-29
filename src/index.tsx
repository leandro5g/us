import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./global/styles/theme";

import { Routes } from "./routes";
import { CreatePost } from "./pages/create-post/create-post.screen";

const MyApp: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <CreatePost />
    </ThemeProvider>
  );
};

export { MyApp };
