import { render } from "@testing-library/react-native";
import { ThemeProviderStyle } from "../../../../global/styles/providers/theme-provider";
import { Title } from "../title.component";

const TEXT_TITLE = "My Title";

describe("Title", () => {
  it("Should be able render component", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Title>{TEXT_TITLE}</Title>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });

  it("Should be able render component with props is Large", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Title isLarge>{TEXT_TITLE}</Title>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });

  it("Should be able render component with props isSub", () => {
    const { getByText } = render(
      <ThemeProviderStyle>
        <Title isSub>{TEXT_TITLE}</Title>
      </ThemeProviderStyle>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });
});
