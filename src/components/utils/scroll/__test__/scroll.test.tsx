import { render } from "@testing-library/react-native";

import { Scroll } from "../scroll.component";
describe("scroll", () => {
  it("should be able to render component", () => {
    const { getByTestId } = render(<Scroll></Scroll>);

    const element = getByTestId("scroll");

    expect(element).toBeTruthy();
  });
});
