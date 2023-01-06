import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../styles/providers/theme-provider";

import { Loading } from "../loading.component";
describe("loading", () => {
  it("slound be able to render component", () => {
    const { getByTestId } = render(
      <ThemeProviderStyle>
        <Loading isLoading={true} />
      </ThemeProviderStyle>
    );

    const element = getByTestId("LoadingComponent");

    expect(element.props.animating).toBe(true);
  });
});
