import "styled-components";

import { THEME } from "../../../global/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}
