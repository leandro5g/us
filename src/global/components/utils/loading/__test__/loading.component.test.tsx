import { render } from "@testing-library/react-native";
import { AppProvider } from "../../../../providers/app-provider";

import { Loading } from "../loading.component";
describe("loading", () => {
  it("slound be able to render component", () => {
    const { getByTestId } = render(
      <AppProvider>
        <Loading isLoading={true} />
      </AppProvider>
    );

    const element = getByTestId("LoadingComponent");

    expect(element.props.animating).toBe(true);
  });
});
