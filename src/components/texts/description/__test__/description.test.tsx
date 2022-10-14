import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../global/styles/providers/theme-provider";
import { Description } from "../description.component";

const TEXT_DESCRIPTION = "Test Render";
describe("Description", () => {
  it("Should be able to render component description", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Description>{TEXT_DESCRIPTION}</Description>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_DESCRIPTION);

    expect(element).toBeTruthy();
  });

  it("Should be able to render component with props isHastag", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Description isHastag>{TEXT_DESCRIPTION}</Description>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_DESCRIPTION);

    expect(element).toBeTruthy();
  });

  it("Should be able to render component with props isAction", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Description isAction>{TEXT_DESCRIPTION}</Description>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_DESCRIPTION);

    expect(element).toBeTruthy();
  });

  it("Should be able to render component with props isSpam", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Description isSpam>{TEXT_DESCRIPTION}</Description>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_DESCRIPTION);

    expect(element).toBeTruthy();
  });
});
