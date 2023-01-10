import React from "react";
import { render } from "@testing-library/react-native";
import { TextFeeling } from "../text-feeling.component";
import { AppProvider } from "../../../../providers/app-provider";

const TEXT_FEELING = "triste";

describe("text feeling", () => {
  it("should be able to render component", () => {
    const { getByTestId } = render(
      <AppProvider>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </AppProvider>
    );

    const elementSub = getByTestId("SUB_TEXT");
    const elementFeeling = getByTestId("FEELING_TEXT");

    expect(elementSub).toBeTruthy();
    expect(elementFeeling).toBeTruthy();
  });

  it("should be able render spam feeling", () => {
    const { getByText } = render(
      <AppProvider>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </AppProvider>
    );

    const element = getByText(`#${TEXT_FEELING}`);

    expect(element).toBeTruthy();
  });

  it("should be able render complet text", () => {
    const { getByText } = render(
      <AppProvider>
        <TextFeeling>{TEXT_FEELING}</TextFeeling>
      </AppProvider>
    );

    const element = getByText("Estou");

    expect(element).toBeTruthy();
  });
});
