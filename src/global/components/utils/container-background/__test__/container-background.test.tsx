import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../styles/providers/theme-provider";

import { ContainerBackground } from "../container-background.component";
describe("container background", () => {
  it("sloud be able to render component", () => {
    const { findByTestId } = render(
      <ThemeProviderStyle>
        <ContainerBackground />
      </ThemeProviderStyle>
    );

    const element = findByTestId("ContainerBackground");

    expect(element).toBeTruthy();
  });
});
