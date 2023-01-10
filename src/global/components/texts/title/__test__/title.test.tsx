import { render } from "@testing-library/react-native";
import { AppProvider } from "../../../../providers/app-provider";
import { Title } from "../title.component";

const TEXT_TITLE = "My Title";

describe("Title", () => {
  it("Should be able render component", () => {
    const { getByText } = render(
      <AppProvider>
        <Title>{TEXT_TITLE}</Title>
      </AppProvider>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });

  it("Should be able render component with props is Large", () => {
    const { getByText } = render(
      <AppProvider>
        <Title isLarge>{TEXT_TITLE}</Title>
      </AppProvider>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });

  it("Should be able render component with props isSub", () => {
    const { getByText } = render(
      <AppProvider>
        <Title isSub>{TEXT_TITLE}</Title>
      </AppProvider>
    );

    const element = getByText(TEXT_TITLE);

    expect(element).toBeTruthy();
  });
});
