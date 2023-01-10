import { render } from "@testing-library/react-native";
import { AppProvider } from "../../../../providers/app-provider";
import { Emoji } from "../emoji.component";

const TEXT_EMOJI = "🚀";
describe("Emoji", () => {
  it("Should be able to render component Emoji", () => {
    const { getByText } = render(
      <AppProvider>
        <Emoji>{TEXT_EMOJI}</Emoji>
      </AppProvider>
    );

    const element = getByText(TEXT_EMOJI);

    expect(element).toBeTruthy();
  });
});
