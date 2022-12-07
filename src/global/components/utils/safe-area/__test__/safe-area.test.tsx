import { render } from "@testing-library/react-native";

import { SafeArea } from "../safe-area.component";
describe("safe area", () => {
  it("should be able to render component", () => {
    const { getByTestId } = render(<SafeArea></SafeArea>);

    const element = getByTestId("safe-area");

    expect(element).toBeTruthy();
  });
});
