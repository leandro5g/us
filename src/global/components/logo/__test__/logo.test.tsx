import React from "react";
import { render } from "@testing-library/react-native";

import { Logo } from "../logo.component";
import { AppProvider } from "../../../providers/app-provider";

describe("Logo", () => {
  it("Should be able to render component", () => {
    const { debug } = render(
      <AppProvider>
        <Logo />
      </AppProvider>
    );

    debug();
  });
});
