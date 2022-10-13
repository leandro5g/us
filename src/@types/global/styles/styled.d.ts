import "styled-components";

import { THEME } from "../../../global/styles/themes/dark";

declare module "styled-components" {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}
