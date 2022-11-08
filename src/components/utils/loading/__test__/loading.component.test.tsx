import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../global/styles/providers/theme-provider";

import { Loading } from "../loading.component";
describe("loading", () => {
  it("slound be able to render component", () => {
    const { getByTestId } = render(
      <ThemeProviderStyle>
        <Loading isLoading={true} />
      </ThemeProviderStyle>
    );

    const element = getByTestId("LoadingComponent");

    console.log(element.props);

    expect(element.props.animating).toBe(true);
  });
});
