import { render } from "@testing-library/react-native";
import { AppProvider } from "../../../../providers/app-provider";

import { ContainerBackground } from "../container-background.component";
describe("container background", () => {
  it("sloud be able to render component", () => {
    const { findByTestId } = render(
      <AppProvider>
        <ContainerBackground />
      </AppProvider>
    );

    const element = findByTestId("ContainerBackground");

    expect(element).toBeTruthy();
  });
});
