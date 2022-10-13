import React from "react";
import { render } from "@testing-library/react-native";

import { Logo } from "../logo.component";
import { ThemeProviderStyle } from "../../../global/styles/providers/theme-provider";

describe("Logo", () => {
  it("Should be able to render component", () => {
    render(
      <ThemeProviderStyle>
        <Logo />
      </ThemeProviderStyle>
    );
  });
});
