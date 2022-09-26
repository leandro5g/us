import React from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { MyApp } from "./src";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontIsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (fontIsLoaded) {
    SplashScreen.hideAsync();
    return <MyApp />;
  }
}
