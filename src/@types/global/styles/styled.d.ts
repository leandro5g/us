import 'styled-components';

import { THEME_DARK } from '../../../global/styles/themes/dark';

declare module 'styled-components' {
  type ThemeType = typeof THEME_DARK;

  export interface DefaultTheme extends ThemeType {}
}
