import React from "react";
import { render } from "@testing-library/react-native";
import { TextFeeling } from "../text-feeling.component";
import { ThemeProviderStyle } from "../../../../styles/providers/theme-provider";

const TEXT_FEELING = "triste";

describe("text feeling", () => {
  it("should be able to render component", () => {
    const { getByTestId } = render(
      <ThemeProviderStyle>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </ThemeProviderStyle>
    );

    const elementSub = getByTestId("SUB_TEXT");
    const elementFeeling = getByTestId("FEELING_TEXT");

    expect(elementSub).toBeTruthy();
    expect(elementFeeling).toBeTruthy();
  });

  it("should be able render spam feeling", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </ThemeProviderStyle>
    );

    const element = getByText(`#${TEXT_FEELING}`);

    expect(element).toBeTruthy();
  });

  it("should be able render complet text", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </ThemeProviderStyle>
    );

    const element = getByText("Estou");

    expect(element).toBeTruthy();
  });
});
