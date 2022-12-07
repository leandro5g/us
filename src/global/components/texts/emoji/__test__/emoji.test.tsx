import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../styles/providers/theme-provider";
import { Emoji } from "../emoji.component";

const TEXT_EMOJI = "🚀";
describe("Emoji", () => {
  it("Should be able to render component Emoji", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Emoji>{TEXT_EMOJI}</Emoji>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_EMOJI);

    expect(element).toBeTruthy();
  });
});
